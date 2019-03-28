import { Injectable } from '@angular/core';
import { CognitoIdentityServiceProvider } from 'aws-sdk';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { environment as env } from 'src/environments/environment';

import { User } from 'src/classes/user';
import { PagedList } from 'src/classes/paged-list';

export interface ICreateUserCallback {
  onSuccess: () => void,
  onFailure: (err: any) => void
}

/**
 * A service for creating, getting, updating, and listing users.
 *
 * @export
 * @class UsersService
 */
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private cognitoIdentityServiceProvider: CognitoIdentityServiceProvider;
  private userList: Array<User>;
  private userListObs$: Observable<Array<User>>;

  constructor() { 
    // TODO: move this configuration information somewhere appropriate
    this.cognitoIdentityServiceProvider = new CognitoIdentityServiceProvider({
      accessKeyId: env.cognito.accessKeyId,
      secretAccessKey: env.cognito.secretAccessKey,
      region: env.cognito.region
    });

    this.userListObs$ = this.fetchUsers();
  }

  /**
   * Gets the list of system users. The returned list starts at `pageSize * page` users into
   * the collection, and contains up to `pageSize` users.
   *
   * @param {number} [pageSize=10] The number of users returned.
   * @param {number} [page=0] The page number of the page of users to get. Pages are zero-indexed.
   * @returns {Observable<PagedList<User>>} An observable that returns a PagedList of User objects.
   * @memberof UsersService
   */
  public getUsers(pageSize: number = 10, page: number = 0): Observable<PagedList<User>> {
    let obs$: Observable<Array<User>>;
  
    if (this.userListObs$) {
      // A new list of users is waiting to be fetched, so use that
      obs$ = this.userListObs$.pipe(
        tap((val) => {
          this.userList = val;        // Cache incoming user list for later
          this.userListObs$ = null;   // Clear observable since its not needed anymore
        })
      );
    } else {
      // There's no new list of users waiting, so use the cached list
      obs$ = new Observable<Array<User>>((subscriber) => {
        subscriber.next(this.userList);
        subscriber.complete();
      });
    }
    return obs$.pipe(
      map((val) => new PagedList<User>({
        items: val.slice(pageSize * page, pageSize * (page + 1)),
        page: page,
        total: this.userList.length
      }))  // Grab page of values that was requested and convert to PagedList of Users
    );
  }

  /**
   * Gets the user with the given userId.
   *
   * @param {string} userId The userId of the user to get.
   * @returns {Observable<User>} An observable that returns the found user.
   * @memberof UsersService
   */
  public getUser(userId: string): Observable<User> {
    const obs$ = new Observable<User>((subscriber) => {
      this.cognitoIdentityServiceProvider.adminGetUser({
        UserPoolId: env.cognito.userPoolId,
        Username: userId
      }, (err, data) => {
        if (err) {
          subscriber.error(err);
        } else {
          const user = new User();
          data.UserAttributes.forEach((att) => {
            if (att.Name === 'email') {
              user.email = att.Value;
            } else if (att.Name === 'custom:administrator') {
              user.administrator = att.Value === 'true';
            } else if (att.Name === 'sub') {
              user.id = att.Value;
            } else if (att.Name === 'phone_number') {
              user.phone = att.Value;
            } else if (att.Name === 'custom:prefContactMethod') {
              user.preferredContactMethod = att.Value;
            } else if (att.Name === 'preferred_username') {
              user.name = att.Value;
            }
          });
          user.status = data.UserStatus;

          subscriber.next(user);
          subscriber.complete();
        }
      })
    });

    return obs$;
  }

  /**
   * Applies any changes made to the given User object, saving them.
   *
   * @param {User} user The user to be saved.
   * @returns {Observable<void>} An observable that will fire when the user is updated.
   * @memberof UsersService
   */
  public updateUser(user: User): Observable<void> {
    let attributes = [];

    attributes.push({
      Name: 'phone_number',
      Value: user.phone
    });
    attributes.push({
      Name: 'custom:administrator',
      Value: user.administrator ? 'true' : 'false'
    });
    attributes.push({
      Name: 'custom:prefContactMethod',
      Value: user.preferredContactMethod
    });
    attributes.push({
      Name: 'preferred_username',
      Value: user.name
    });
    
    const obs$ = new Observable<void>((subscriber) => {
      this.cognitoIdentityServiceProvider.adminUpdateUserAttributes({
        UserPoolId: env.cognito.userPoolId,
        Username: user.id,
        UserAttributes: attributes
      }, (err, data) => {
        if (err) {
          subscriber.error(err);
        } else {
          subscriber.next();
          subscriber.complete();
        }
      })
    });

    return obs$;
  }

  /**
   * Creates a new user using the given parameters, and calls the given
   * callbacks depending on the success of the operation.
   *
   * @param {string} username The username of the user. This can be the same as the user's email.
   * @param {string} password A temporary password for the user. The user will be forced to change it on their first login. If left blank, a temporary password will be automatically generated.
   * @param {string} email The user's email address. A welcome email with the user's username and password will be sent to this address once user creation succeeds.
   * @param {boolean} admin Whether or not this user is an administrator. This will be used to determine whether or not they have access to certain features.
   * @param {ICreateUserCallback} callback An object containing the callback methods called when the operation succeeds or fails.
   * @memberof UsersService
   */
  public createUser(username: string, password: string, email: string, admin: boolean, phone: string, prefContact: string, callback: ICreateUserCallback): void {
    // TODO: Validate input
    let attributes = [{
      Name: 'email',
      Value: email
    }, {
      Name: 'custom:administrator',
      Value: admin ? 'true' : 'false'
    }, {
      Name: 'custom:prefContactMethod',
      Value: prefContact
    }, {
      Name: 'email_verified',
      Value: 'true'
    }];
    if (phone) {
      attributes.push({
        Name: 'phone_number',
        Value: phone
      });
    }
    if (username) {
      attributes.push({
        Name: 'preferred_username',
        Value: username
      });
    }

    this.cognitoIdentityServiceProvider.adminCreateUser({
      UserPoolId: env.cognito.userPoolId,
      Username: email,
      TemporaryPassword: password,
      UserAttributes: attributes,
      DesiredDeliveryMediums: [
        'EMAIL'
      ]
    }, (err, data) => {
      if (err) {
        callback.onFailure(err);
      } else {
        this.fetchUsers();    // Fetch updated user list
        callback.onSuccess();
      }
    });
  }

  /**
   * Fetches the list of all system users.
   *
   * @private
   * @param {string} [paginationToken=null] The pagination token for the next set of users.
   * @returns {Observable<Array<User>>} An observable that returns an array of User objects.
   * @memberof UsersService
   */
  private fetchUsers(paginationToken: string = null): Observable<Array<User>> {
    const obs$ = new Observable<Array<User>>((subscriber) => {
      this.cognitoIdentityServiceProvider.listUsers({
        UserPoolId: env.cognito.userPoolId,
        PaginationToken: paginationToken
      }, (err, data) => {
        if (err) {
          // Something went wrong getting the users. Just pass the error along
          subscriber.error(err);
        } else {
          const users: Array<User> = [];

          // Convert incoming user data into user objects
          data.Users.forEach((u) => {
            const user = new User();
            u.Attributes.forEach((att) => {
              if (att.Name === 'email') {
                user.email = att.Value;
              } else if (att.Name === 'custom:administrator') {
                user.administrator = att.Value === 'true';
              } else if (att.Name === 'sub') {
                user.id = att.Value;
              } else if (att.Name === 'phone_number') {
                user.phone = att.Value;
              } else if (att.Name === 'custom:prefContactMethod') {
                user.preferredContactMethod = att.Value;
              } else if (att.Name === 'preferred_username') {
                user.name = att.Value;
              }
            });
            user.status = u.UserStatus;
            users.push(user);
          });

          if (data.PaginationToken) {
            // There's at least one more page of users, so go get it
            const nextUsersObs$: Observable<Array<User>> = this.fetchUsers(data.PaginationToken);
            nextUsersObs$.subscribe((nextUsers: User[]) => {
              // Send all the users found so far
              subscriber.next(users.concat(nextUsers));
            }, (err) => {
              // Something went wrong up the chain. Just pass the error along
              subscriber.error(err);
            }, () => {
              // The next observable in the chain completed, so I should too
              subscriber.complete();
            })
          } else {
            // No more users, send off what we have
            subscriber.next(users);
            subscriber.complete();
          }
        }
      });
    });

    return obs$;
  }

  /**
   * Deletes the given user from the application, and returns an
   * Observable that will send one result when the operation completes,
   * or error if an error occurs.
   *
   * @param {User} user The user to be deleted.
   * @returns {Observable<void>}
   * @memberof UsersService
   */
  public deleteUser(user: User): Observable<void> {
    const obs$ = new Observable<void>((subscriber) => {
      this.cognitoIdentityServiceProvider.adminDeleteUser({
        UserPoolId: env.cognito.userPoolId,
        Username: user.id
      }, (err, data) => {
        if (err) {
          subscriber.error(err);
        } else {
          this.fetchUsers();  // Fetch updated user list
          subscriber.next();
        }
        subscriber.complete();
      });
    });
    return obs$;
  }

  /**
   * Resets the given user's password, forcing them to change it
   * on their next login.
   *
   * @param {User} user The user to reset the password on.
   * @returns {Observable<void>} An observable that returns when the password has been reset.
   * @memberof UsersService
   */
  public resetUserPassword(user: User): Observable<void> {
    const obs$ = new Observable<void>((subscriber) => {
      this.cognitoIdentityServiceProvider.adminResetUserPassword({
        UserPoolId: env.cognito.userPoolId,
        Username: user.id
      }, (err, data) => {
        if (err) {
          subscriber.error(err);
        } else {
          subscriber.next();
          subscriber.complete();
        }
      });
    });
    return obs$;
  }
}
