import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
lat: any;
lon: any;
data: any = [];
date = new Date();
day = this.date.getDate();
mon = this.date.getMonth() + 1;
year = this.date.getFullYear();
finalDate = '';
centerId: any;
  constructor(private myService: GetDataService) {
    console.log('Inside constructor');
    }

  ngOnInit(): void {
this.getLocation();
  }
 getCenterId(data: any): any
 {
  this.centerId = data.center_id;
  console.log(this.centerId);
  this.finalDate = this.day + '-' + this.mon + '-' + this.year;
  console.log(this.finalDate);
  this.myService.setCenterI(this.centerId, this.finalDate);
 }
  getLocation():any
  {

    if ('geolocation' in navigator)
    {
      navigator.geolocation.watchPosition((success) =>
      {
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;

        this.myService.getDataByCurrentLoc(this.lat, this.lon).subscribe((res:any) =>
         {
           this.data = res.centers;
       //  console.log(this.data);
        //   console.log('weatherrr'+this.weather);
         });
      });
    }
  }
}
