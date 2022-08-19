import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { ToDoString } from "./to-do-string/to-do-string";

@Injectable()
export class ToDoListService {
    private url = "http://localhost:5000/ToDoList"
    constructor(private http: HttpClient) { }

}