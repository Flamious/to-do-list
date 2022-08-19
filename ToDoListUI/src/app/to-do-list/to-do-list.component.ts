import { Component, OnInit } from "@angular/core";
import { ToDoString } from "../to-do-string/to-do-string";
import { ApiService } from '../api.sevice';
import { ADD, TITLE, OK, REFRESH, SHOW_COMPLETED_TASKS } from "../constants"

@Component({
    selector: 'to-do-list',
    templateUrl: './to-do-list.component.html',
    styleUrls: ['./to-do-list.component.css']
})

export class ToDoListComponent implements OnInit {
    strings: ToDoString[] = [];
    newTask: string = ""
    showHiddenTasks: boolean = false

    readonly ADD = ADD
    readonly TITLE = TITLE
    readonly OK = OK
    readonly REFRESH = REFRESH
    readonly SHOW_COMPLETED_TASKS = SHOW_COMPLETED_TASKS

    constructor(private apiService: ApiService) { }

    ngOnInit() {
        this.getTasks()
    }

    getTasks() {
        this.apiService.getToDoList(this.showHiddenTasks).subscribe({ next: (data: ToDoString[]) => this.strings = data });
    }

    checkEnterOnTaskField(e: any) {
        console.log("!!!!")
        let enterKey = 13;
        if(e.which == enterKey) {
            this.addTask();
        }
    }

    addTask() {
        this.apiService.addTask(this.newTask).subscribe({
            next: (data: ToDoString | undefined) => {
                if (data === undefined) {

                } else {
                    this.strings.push(data);
                    this.newTask = ""
                }
            }
        });
    }

    onDelete(toDoString: ToDoString) {
        this.strings = this.strings.filter(item => item.id !== toDoString.id);
    }
}