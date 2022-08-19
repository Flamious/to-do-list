import { Component, OnInit } from "@angular/core";
import { ToDoString } from "./to-do-string/to-do-string";
import { ToDoListService } from './to-do-list.sevice';

@Component({
    selector: 'to-do-list',
    templateUrl: './to-do-list.component.html'
})

export class ToDoListComponent implements OnInit {
    strings: ToDoString[] = [];

    constructor(private toDoListService: ToDoListService) { }

    ngOnInit() {
        this.toDoListService.getToDoList().subscribe({ next: (data: ToDoString[]) => this.strings = data });
    }
}