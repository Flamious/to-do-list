import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ToDoString } from "./to-do-string/to-do-string";

@Injectable()
export class ToDoListService {
    private url = "http://localhost:5000/todolist"
    constructor(private http: HttpClient) { }

    getToDoList() : Observable<ToDoString[]> {
        return this.http.get(this.url).pipe(map((data: any) => {
            let toDoList = data["toDoList"];
            return toDoList.map(function(string: any): ToDoString {
                return new ToDoString(string.id, string.task, string.isDeleted);
            })
        }))
    }
}