import { Component, OnInit } from '@angular/core';
import {Router,Event as RouterEvent,NavigationStart,NavigationEnd,NavigationCancel,NavigationError} from '@angular/router';
import { TaskService } from './services/task';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [TaskService]
})
export class AppComponent implements OnInit {

    loading = true;
    totalCompletedTask:number;
    ngOnInit() {
    }
    // Sets initial value to true to show loading spinner on first load
    

    constructor(private router: Router,private taskService: TaskService) {
        router.events.subscribe((event: RouterEvent) => {
            this.navigationInterceptor(event);
        });
        this.taskService.getTasks().then(tasks =>{
            this.totalCompletedTask = tasks.filter(data=> data.isCompleted==true).length;
       });
    }

    // Shows and hides the loading spinner during RouterEvent changes
    navigationInterceptor(event: RouterEvent): void {
        if (event instanceof NavigationStart) {
        this.loading = true
        }
        if (event instanceof NavigationEnd) {
        this.loading = false
        }

        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof NavigationCancel) {
        this.loading = false
        }
        if (event instanceof NavigationError) {
        this.loading = false
        }
    }
}
