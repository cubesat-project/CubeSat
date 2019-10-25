export class User {
    public id: string;
    public email: string;
    public phone: string;
    public administrator: boolean;
    public status: string;
    public preferredContactMethod: string;
    public name: string;

    constructor(params: User = {} as User) {
        let {
            id = '',
            email = '',
            phone = '',
            administrator = false,
            status = '',
            preferredContactMethod = '',
            name = ''
        } = params;

        this.id = id;
        this.email = email;
        this.phone = phone;
        this.administrator = administrator;
        this.status = status;
        this.preferredContactMethod = preferredContactMethod;
        this.name = name;
    }

    /**
     * Gets the user's name and returns it if it exists, otherwise
     * returns the user's email address. Use this for displaying a
     * human-readable name in the UI.
     *
     * @returns {string} The user's name if available, otherwise their email.
     * @memberof User
     */
    public getName(): string {
        if (this.name) {
            return this.name;
        } else {
            return this.email;
        }
    }
}