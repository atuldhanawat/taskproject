import { Component, OnInit } from '@angular/core';
import { Task } from '../../interface/task';
import { TaskService } from '../../services/task';
@Component({
    selector: 'app-task',
    templateUrl: './home.component.html',
    providers: [TaskService]
})
//component to implement home related functionality
export class HomeComponent implements OnInit {
    newTask: boolean;
    tasks: Task[];
    gtasks:any[];
    ptasks:any[];
    tltasks:any[];
    columns: any[];
    constructor(private taskService: TaskService) { }
    ngOnInit() {
        this.taskService.getTasks().then(tasks =>{
             this.tasks = tasks;
             this.gtasks=this.tasks.filter(data=> data.isGlobal==true);
             this.ptasks=this.tasks.filter(data=> data.isLeader==true);
             this.tltasks=this.tasks.filter(data=> data.isLeader==true);
        });
        
        //Define column for listing
        this.columns = [
            { field: 'text', header: 'Text' },
            { field: 'isGlobal', header: 'Is Global' },
            { field: 'isLeader', header: 'Is Leader' },
            { field: 'creator', header: 'Creator' },
            { field: 'isCompleted', header: 'Is Completed' },
            { field: 'start', header: 'Start' },
            { field: 'end', header: 'End' }
        ];
    }
    
}
