import { Component, OnInit } from "@angular/core";
import { ToDoString } from "../to-do-string/to-do-string";
import { ApiService } from '../api.sevice';
import { ADD, TITLE, OK, REFRESH, SHOW_COMPLETED_TASKS, COULD_NOT_ADD_TASK, COULD_NOT_LOAD_TASKS } from "../constants"
import { Error } from "../error/error";

@Component({
    selector: 'to-do-list',
    templateUrl: './to-do-list.component.html',
    styleUrls: ['./to-do-list.component.css']
})

export class ToDoListComponent implements OnInit {
    strings: ToDoString[] = [];
    errors: Error[] = [];
    newTask: string = ""
    showHiddenTasks: boolean = false

    readonly ADD = ADD
    readonly TITLE = TITLE
    readonly OK = OK
    readonly REFRESH = REFRESH
    readonly SHOW_COMPLETED_TASKS = SHOW_COMPLETED_TASKS
    readonly COULD_NOT_ADD_TASK = COULD_NOT_ADD_TASK
    readonly COULD_NOT_LOAD_TASKS = COULD_NOT_LOAD_TASKS

    constructor(private apiService: ApiService) { }

    ngOnInit() {
        this.getTasks()
    }

    getTasks() {
        this.apiService.getToDoList(this.showHiddenTasks).subscribe({ next: (data: ToDoString[] | undefined) => {
            console.log(data)
            if(data === undefined) {
                this.onError(COULD_NOT_LOAD_TASKS);
            } else {
                this.strings = data
            }
        } });
    }

    checkEnterOnTaskField(e: any) {
        let enterKey = 13;
        if(e.which == enterKey) {
            this.addTask();
        }
    }

    addTask() {
        this.apiService.addTask(this.newTask).subscribe({
            next: (data: ToDoString | undefined) => {
                if (data === undefined) {
                    this.onError(COULD_NOT_ADD_TASK);
                } else {
                    this.strings.push(data);
                    this.newTask = "";
                }
            }
        });
    }

    onDelete(toDoString: ToDoString) {
        this.strings = this.strings.filter(item => item.id !== toDoString.id);
    }

    onError(text: string) {
        let maxErrors = 3;
        if(this.errors.length >= maxErrors) {
            this.errors.shift();
        }
        this.errors.push(new Error(text));
    }

    onCloseError(error: Error) {
        this.errors = this.errors.filter(item => item.id !== error.id);
    }
}