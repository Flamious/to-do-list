export class ToDoString {
    id: number;
    task: string;
    isDeleted: boolean;

    constructor(id: number, task: string) {
        this.id = id;
        this.task = task;
        this.isDeleted = false;
    }
}