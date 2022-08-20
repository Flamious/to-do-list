import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { of, Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { ToDoString } from "./to-do-string/to-do-string";

@Injectable()
export class ApiService {
    private url = "http://localhost:5000/todolist";

    constructor(private http: HttpClient) { }

    getToDoList(showHiddenTasks: boolean): Observable<ToDoString[] | undefined> {
        return this.http.get(`${this.url}?showHiddenTasks=${showHiddenTasks}`).pipe(map((data: any) => {
            let toDoList = data["toDoList"];
            
            return toDoList.map(function (string: any): ToDoString {
                return new ToDoString(string.id, string.task, string.isDeleted);
            });
        }),
        catchError(err => {
            console.log(err);
            return of(undefined);
        }))
    }

    addTask(task: string): Observable<ToDoString | undefined> {
        return this.http.post(`${this.url}?task=${task}`, undefined).pipe(map((data: any) => {
            return new ToDoString(data.id, data.task, data.isDeleted);
        }),
        catchError(err => {
            console.log(err);
            return of(undefined);
        }))
    }

    checkTask(id: number): Observable<boolean> {
        return this.http.put(`${this.url}/${id.toString()}`, undefined).pipe(map((_: any) => {
            return true;
        }),
        catchError(err => {
            console.log(err);
            return of(false);
        }))
    }

    deleteTask(id: number): Observable<boolean> {
        return this.http.delete(`${this.url}/${id.toString()}`).pipe(map((_: any) => {
            return true;
        }),
        catchError(err => {
            console.log(err);
            return of(false);
        }))
    }
}