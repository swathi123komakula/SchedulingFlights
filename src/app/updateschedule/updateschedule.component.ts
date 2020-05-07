import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService, Schedules } from '../myservice.service';
@Component({
  selector: 'app-updateschedule',
  templateUrl: './updateschedule.component.html',
  styleUrls: ['./updateschedule.component.css']
})
export class UpdatescheduleComponent implements OnInit {
  obj1: any;
  schedules: Schedules[];
  message: string;
  constructor(private myservice: MyserviceService, private router: Router)
   { 
    this.obj1 = this.myservice.updateMethod();
   }
   onUpdate(uschedule: Schedules): any {
    return this.myservice.onUpdate(uschedule).subscribe(data => {
      this.message = data
    });
  }
  ngOnInit(): void {
  }

}
