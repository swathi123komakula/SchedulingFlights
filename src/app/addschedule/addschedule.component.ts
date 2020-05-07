import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService,Schedules} from '../myservice.service';
@Component({
  selector: 'app-addschedule',
  templateUrl: './addschedule.component.html',
  styleUrls: ['./addschedule.component.css']
})
export class AddscheduleComponent implements OnInit {
  message: string;

  constructor(private myservice: MyserviceService,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(addsf:Schedules):any{
    console.log(addsf);
     this.myservice.addSf(addsf).subscribe(data => {
      this.message=data});
  }

}
