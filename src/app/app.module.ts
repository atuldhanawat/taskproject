import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {CheckboxModule} from 'primeng/checkbox';
import { AppComponent } from './app.component';
import { TaskComponent } from './component/task/task.component';
import { HomeComponent } from './component/home/home.component';
import { FullcalendarComponent } from './component/fullcalendar/fullcalendar.component';
import { AppRoutingModule } from './app-routing.module';
import { NotifierModule } from 'angular-notifier';
import {MatToolbarModule,MatIconModule,MatBadgeModule,MatButtonModule,MatProgressSpinnerModule,MatDividerModule} from '@angular/material';
import { FullCalendarModule } from '@fullcalendar/angular'; 


@NgModule({
    declarations: [
        AppComponent,
        TaskComponent,
        HomeComponent,
        FullcalendarComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        TableModule,
        HttpClientModule,
        InputTextModule,
        DialogModule,
        ButtonModule,
        CalendarModule,
        DropdownModule,
        CheckboxModule,
        AppRoutingModule,
        MatToolbarModule,
        MatIconModule,
        MatBadgeModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatDividerModule,
        FullCalendarModule,
        NotifierModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
