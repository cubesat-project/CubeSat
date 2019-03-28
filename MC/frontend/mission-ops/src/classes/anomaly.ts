export class Anomaly {
    telemDataId: number;
    collectionTime: string;
    compTelemName: string;
    compName: string;
    sysName: string;
    upperBound: number;
    lowerBound: number;
    reading: number;
    unit: string;

    constructor(telemDataId: number, collectionTime: string, compTelemName: string, compName: string, sysName: string, upperBound: number,
        lowerBound: number, reading: number, unit: string) {
           
        this.telemDataId = telemDataId;
        this.collectionTime = collectionTime;
        this.compTelemName = compTelemName;
        this.compName = compName;
        this.sysName = sysName;
        this.upperBound = upperBound;
        this.lowerBound = lowerBound;
        this.reading = reading;
        this.unit = unit;
    }
}