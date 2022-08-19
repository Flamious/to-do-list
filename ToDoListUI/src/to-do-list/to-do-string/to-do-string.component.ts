import { Component, Input } from "@angular/core";
import {ToDoString} from "./to-do-string"

@Component({
    selector: 'to-do-string',
    templateUrl: './to-do-string.component.html',
    styleUrls: ['././to-do-string.component.css']
})

export class ToDoStringComponent {
    @Input() isOdd: boolean
    @Input() item: ToDoString
}