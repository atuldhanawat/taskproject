import { Component, OnInit } from '@angular/core';
import { Task } from '../../interface/task';
import { TaskService } from '../../services/task';
import dayGridPlugin from '@fullcalendar/daygrid';
import { EventInput } from '@fullcalendar/core';
@Component({
    selector: 'app-task',
    templateUrl: './fullcalendar.component.html',
    providers: [TaskService]
})
//component to implement full calendar related functionality
export class FullcalendarComponent implements OnInit {
    newTask: boolean;
    tasks: Task[];
    calendarPlugins = [dayGridPlugin];
    calendarEvents: EventInput[]=[];
    
    constructor(private taskService: TaskService) { }
    ngOnInit() {
        this.taskService.getTasks().then(tasks =>{
             this.tasks = tasks;
             this.tasks.forEach(record=>{
                 this.calendarEvents = this.calendarEvents.concat({ title: record.text, start: new Date(record.start), end: new Date(record.end) })
             });
        });
        
    }

    handleDateClick(){

    }
    
}
