import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../interface/task';

@Injectable()
export class TaskService {
    constructor(private http: HttpClient) {}
    //service to return all tasks
    getTasks() {
        return this.http.get<any>('assets/data/task.json')
            .toPromise()
            .then(res => <Task[]> res.tasks)
            .then(data => data);
    }
    //service to return all task type
    getTaskType(){
        return this.http.get<any>('assets/data/common.json')
            .toPromise()
            .then(res =>res);
    }
}
