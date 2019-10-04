import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './component/task/task.component';
import { HomeComponent } from './component/home/home.component';
import { FullcalendarComponent } from './component/fullcalendar/fullcalendar.component';
const routes: Routes = [
  // Fallback when no prior route is matched
  { path: 'home', component: HomeComponent },
  { path: 'task', component: TaskComponent },
  { path: 'calendar', component: FullcalendarComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
