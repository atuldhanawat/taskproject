import { Component, OnInit } from '@angular/core';
import { Task } from '../../interface/task';
import { TaskService } from '../../services/task';
import { NotifierService } from 'angular-notifier';
//Task Class
export class TaskObj implements Task {
    constructor(public text?, public isGlobal?, public isLeader?,public creator?,public isCompleted?,public start?,public end?) {}
}
@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    providers: [TaskService]
})
//component to implement task related functionality
export class TaskComponent implements OnInit {
    displayDialog: boolean;
    task: Task = new TaskObj();
    selectedTask: Task;
    newTask: boolean;
    originaltasks: Task[];
    tasks:any[];
    taskType:any[];
    createdBy:any[];
    taskStatus:any[];
    columns: any[];
    minStartDate:Date;
    minEndDate:Date;
    filterTaskType:any='';
    filterIsLeadChecked:boolean;
    private readonly notifier: NotifierService;
    constructor(private taskService: TaskService,notifierService: NotifierService) { 
        this.notifier = notifierService;
    }
    ngOnInit() {
        this.taskService.getTasks().then(tasks =>{
             this.originaltasks = tasks;
             this.tasks=tasks;
        });
        this.taskService.getTaskType().then(data =>{
            this.taskType = data.type;
            this.createdBy=data.createdBy;
            this.taskStatus=data.status;
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
        this.minStartDate=new Date();
    }
    filter(){
        this.tasks=this.originaltasks;
        if(typeof this.filterIsLeadChecked!='undefined' && this.filterIsLeadChecked[0]=="true"){
            this.tasks=this.tasks.filter(result=>{
                        return (result.isLeader==true);
            });
        }
        if(this.filterTaskType=="global"){
            this.tasks=this.tasks.filter(result=>{
                    return (result.isGlobal==true);
            });
        }
        if(this.filterTaskType=="personal"){
            this.tasks=this.tasks.filter(result=>{
                    return (result.isGlobal==false);
            });
        }
        
    }
    showDialogToAdd() {
        this.newTask = true;
        this.task = new TaskObj();
        this.displayDialog = true;
    }
    save() {

        const originaltasks = [...this.originaltasks];
        //this.task.isLeader=(typeof this.task.isLeader!='undefined' && this.task.isLeader[0]=='true')?true:false;
        //this.task.isCompleted=(typeof this.task.isCompleted!='undefined' && this.task.isCompleted[0]=='true')?true:false;
       
        if (this.newTask) {
            originaltasks.push(this.task);
        } else {
            originaltasks[this.findSelectedTaskIndex()] = this.task;
        }
        if(this.task.isCompleted){
            this.notifier.notify( 'success', this.task.text+' task is completed' );
        }
        this.originaltasks = originaltasks;
        this.tasks = originaltasks;
        this.task = null;
        this.displayDialog = false;
    }
    delete() {
        const index = this.findSelectedTaskIndex();
        this.originaltasks = this.originaltasks.filter((val, i) => i !== index);
        this.tasks=this.originaltasks;
        this.task = null;
        this.displayDialog = false;
    }
    onRowSelect(event) {
        this.newTask = false;
        this.task = {...event.data};
        this.task.start=new Date(this.task.start);
        this.task.end=new Date(this.task.end);
        this.displayDialog = true;
    }
    findSelectedTaskIndex(): number {
        console.log(this.selectedTask);
        return this.originaltasks.indexOf(this.selectedTask);
    }
}
