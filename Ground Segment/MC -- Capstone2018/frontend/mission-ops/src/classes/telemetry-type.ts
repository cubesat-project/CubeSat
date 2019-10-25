export class TelemetryType {
    telemetryTypeID: number;
    telemetryUnit: string;
    name: string;

    constructor(telemetryUnit: string, name: string){
        this.telemetryUnit = telemetryUnit;
        this.name = name;
    }
}