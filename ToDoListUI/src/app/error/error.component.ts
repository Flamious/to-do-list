import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { CLOSE } from "../constants";
import { Error } from "./error";


@Component({
    selector: 'error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.css']
})
export class ErrorComponent {
    @Input() error: Error;
    @Output() onClose = new EventEmitter<Error>()

    readonly CLOSE = CLOSE;
    
    close() {
        this.onClose.emit(this.error);
    }
}