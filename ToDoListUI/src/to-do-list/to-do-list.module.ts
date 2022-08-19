import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ToDoListComponent }   from './to-do-list.component';
import { ToDoListService }   from './to-do-list.sevice';
import { ToDoStringComponent }   from './to-do-string/to-do-string.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpClientModule ],
    declarations: [ ToDoListComponent, ToDoStringComponent ],
    providers:    [ ToDoListService ],
    bootstrap:    [ ToDoListComponent ]
})
export class ToDoListModule { }