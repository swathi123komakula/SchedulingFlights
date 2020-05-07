import { Component, OnInit } from '@angular/core';
import { MyserviceService, Schedules } from '../myservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewschedule',
  templateUrl: './viewschedule.component.html',
  styleUrls: ['./viewschedule.component.css']
})
export class ViewscheduleComponent implements OnInit {
    message: string;
  schedules: Schedules[];
    constructor(private myservice: MyserviceService, private router: Router) {
    }
  
    ngOnInit(): any {
      this.myservice.getSchedules().subscribe(
        response => this.handleSuccessfulResponse(response),
      );
    }
    handleSuccessfulResponse(response) {
      this.schedules = response;
    }
    update(updateschedule: Schedules) {
      this.myservice.update(updateschedule);
      this.router.navigate(['/updatesf']); //updating the employee
    }
    delete(deleteschedule: Schedules): any {
      this.myservice.delete(deleteschedule.scheduledflightid).subscribe(data => {
        this.message = data
      });
      this.router.navigate(['/viewsf']);
    }
  }
  