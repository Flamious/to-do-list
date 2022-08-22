import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ApiService } from './api.sevice';
import { ToDoStringComponent } from './to-do-string/to-do-string.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'app', component: ToDoListComponent },
    { path: '**', redirectTo: '' }
]
@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes)],
    declarations: [ToDoListComponent, ToDoStringComponent, HomeComponent, AppComponent, ErrorComponent],
    providers: [ApiService],
    bootstrap: [AppComponent]
})
export class AppModule { }