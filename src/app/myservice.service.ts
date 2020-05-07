
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  updateschedule: Schedules;
  constructor(private httpService: HttpClient) { }
  public getSchedules() {
    console.log("ins service get schedules");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Schedules>("http://localhost:5445/schedules/GetAllScheduledFlight");
  }

  public addSf(addsf: Schedules) {
    console.log("ins service add");
    console.log(addsf);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:5445/schedules/addScheduledFlight", addsf,  { headers, responseType: 'text'});
  }
  
  public update(updateschedule: Schedules) {
    this.updateschedule = updateschedule;
  }
  public updateMethod() {
    return this.updateschedule;
  }
  public onUpdate(updatesf: Schedules) {
    console.log("ins service update");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.put("http://localhost:5445/schedules/UpdateScheduledFlight", updatesf,  { headers, responseType: 'text'});
  }
  delete(scheduledflightid: number) {
    console.log("ins service delete");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.delete("http://localhost:5445/schedules/DeleteScheduledFlight/" + scheduledflightid,  { headers, responseType: 'text'});
  }

}
export class Schedules {
  id(scheduledflightid: any) {
    throw new Error("Method not implemented.");
  }
  scheduledflightid: number;
  availableSeats:number;
  tiketcost:number;
  sourceAirport: string;
  destinationAirport: string;
  arrivalTime: Date;
  departureTime: Date;
  
}