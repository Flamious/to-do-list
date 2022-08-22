import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ToDoString } from "./to-do-string"
import { ApiService } from '../api.sevice';
import { COULD_NOT_CHECK_TASK, COULD_NOT_DELETE_TASK, DELETE } from "../constants";

@Component({
    selector: 'to-do-string',
    templateUrl: './to-do-string.component.html',
    styleUrls: ['./to-do-string.component.css']
})
export class ToDoStringComponent {
    constructor(private apiService: ApiService) { }

    readonly DELETE = DELETE
    readonly COULD_NOT_CHECK_TASK = COULD_NOT_CHECK_TASK
    readonly COULD_NOT_DELETE_TASK = COULD_NOT_DELETE_TASK

    @Input() isOdd: boolean;
    @Input() item: ToDoString;
    @Output() onDelete = new EventEmitter<ToDoString>();
    @Output() onError = new EventEmitter<string>();

    checkTask() {
        this.apiService.checkTask(this.item.id).subscribe({
            next: (result: boolean) => {
                if (!result) {
                    this.item.isDeleted = !this.item.isDeleted;
                    this.throwError(COULD_NOT_CHECK_TASK);
                }
            }
        });
    }

    deleteTask() {
        this.apiService.deleteTask(this.item.id).subscribe({
            next: (result: boolean) => {
                if (result) {
                    this.onDelete.emit(this.item);
                } else {
                    this.throwError(COULD_NOT_DELETE_TASK);
                }
            }
        });
    }

    throwError(text: string) {
        this.onError.emit(text);
    }
}