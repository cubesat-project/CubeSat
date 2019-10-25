export class Component {
    componentID: number;
    systemID: number;
    name: string;

    constructor(systemID: number, name: string) {
        this.systemID = systemID;
        this.name = name;
    }
}