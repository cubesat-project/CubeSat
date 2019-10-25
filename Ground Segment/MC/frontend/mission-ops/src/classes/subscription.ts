export class Subscription {
    /**
     * The userID subscribed to the systemID.
     * 
     * @type {number}
     * @memberof Subscription
     */
    userID: number;

    /** 
     * The systemID of the subscription.
     * 
     * @type {number}
     * @memberof Subscription
     */
    systemID: number;

    /**
     * Creates a new instance of @member Subscription.
     * @param userID The associated userID.
     * @param systemID The associated systemID.
     */
    constructor(systemID: number, 
                userID: number)
    {
        this.systemID = systemID;
        this.userID = userID;
    }
}