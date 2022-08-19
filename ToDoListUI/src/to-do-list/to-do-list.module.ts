import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ToDoListComponent }   from './to-do-list.component';
import { ToDoStringComponent }   from './to-do-string/to-do-string.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ ToDoListComponent, ToDoStringComponent ],
    bootstrap:    [ ToDoListComponent ]
})
export class ToDoListModule { }