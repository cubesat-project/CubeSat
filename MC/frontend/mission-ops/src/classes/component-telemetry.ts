export class ComponentTelemetry {
    /**
     * The unique ID.
     * 
     * @type {number}
     * @memberof ComponentTelemetry
     */
    componentTelemetryID: number;

    /**
     * The ID of the @alias TelemetryType associated.
     * 
     * @type {number}
     * @memberof ComponentTelemetry
     */
    telemetryTypeID: number;

    /**
     * The ID of the @alias Component associated.
     * 
     * @type {number}
     * @memberof ComponentTelemetry
     */
    componentID: number;

    /**
     * The name of the component telemetry.
     * 
     * @type {string}
     * @memberof ComponentTelemetry
     */
    name: string;

    hasBounds: boolean;

    /**
     * The upper acceptable limit of the component telemetry data.
     * 
     * @type {number}
     * @memberof ComponentTelemetry
     */
    upperBound: number;

    /**
     * The lower acceptable limit of the component telemetry data.
     * 
     * @type {number}
     * @memberof ComponentTelemetry
     */
    lowerBound: number;

    /**
     * Creates a new instance of @member ComponentTelemetry.
     * @param telemetryTypeID The associated telemetry type ID.
     * @param componentID The associated component ID.
     * @param name The name.
     * @param upperBound [optional] The upper bound.
     * @param lowerBound [optional] The lower bound.
     */
    constructor(telemetryTypeID: number, 
                componentID: number,
                name: string,
                hasBounds: boolean = false,
                upperBound: number = null,
                lowerBound: number = null) {
        this.telemetryTypeID = telemetryTypeID;
        this.componentID = componentID;
        this.name = name;
        this.hasBounds = hasBounds;
        this.upperBound = upperBound;
        this.lowerBound = lowerBound;
    }
}