import { Component, EventEmitter, Input, Output } from "@angular/core";
import { TITLE } from "../constants";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    readonly TITLE = TITLE
}