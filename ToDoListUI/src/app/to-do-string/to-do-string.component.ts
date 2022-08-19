import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ToDoString } from "./to-do-string"
import { ApiService } from '../api.sevice';
import { DELETE } from "../constants";

@Component({
    selector: 'to-do-string',
    templateUrl: './to-do-string.component.html',
    styleUrls: ['./to-do-string.component.css']
})
export class ToDoStringComponent {
    constructor(private apiService: ApiService) { }

    readonly DELETE = DELETE

    @Input() isOdd: boolean;
    @Input() item: ToDoString;
    @Output() onDelete = new EventEmitter<ToDoString>()

    checkTask() {
        this.apiService.checkTask(this.item.id).subscribe({
            next: (result: boolean) => {
                console.log(result)
                if (!result) {
                    this.item.isDeleted = !this.item.isDeleted;
                }
            }
        });
    }

    deleteTask() {
        this.apiService.deleteTask(this.item.id).subscribe({
            next: (result: boolean) => {
                console.log(result)
                if (result) {
                    this.onDelete.emit(this.item);
                }
            }
        });
    }
}