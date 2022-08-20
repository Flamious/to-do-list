export class Error {
    id: number;
    text: string;

    constructor(text: string) {
        this.id = new Date().getTime();
        this.text = text;
    }
}