export class PresetTelecommand {
    presetTelecommandID: number;
    telecommandID : number;
    batchID: number;
    commandParameters: string;
    priorityLevel: boolean;
    secondDelay: number;
    minuteDelay: number;
    hourDelay: number;
    dayDelay: number;
    name: string;

    constructor(telecommandID: number, batchID: number) {
        this.telecommandID = telecommandID;
        this.batchID = batchID;
    }
}