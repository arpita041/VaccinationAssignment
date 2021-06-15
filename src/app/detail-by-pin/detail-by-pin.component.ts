import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-detail-by-pin',
  templateUrl: './detail-by-pin.component.html',
  styleUrls: ['./detail-by-pin.component.scss']
})
export class DetailByPinComponent implements OnInit {
data: any;
date: any;
pin: any;
age: any;
clicked = false;
district: any;
length: any = 0;
page = 4;
pageSize: any;
date1 = new Date();
day = this.date1.getDate();
mon = this.date1.getMonth() + 1;
year = this.date1.getFullYear();
finalDate = '';
centerId: any;
  constructor(private service: GetDataService) { }

  ngOnInit(): void {
  }

  getCenterId(data: any):any
  {
   this.centerId = data.center_id;
   console.log(this.centerId);
   this.finalDate = this.day + '-' + this.mon + '-' + this.year;
   console.log(this.finalDate);
   this.service.setCenterI(this.centerId, this.finalDate);
  }
sendValue():any
{
 this.clicked = true;
 console.log('method called');
 this.service.getDetailByPin(this.pin, this.date).subscribe(
      (res:any) =>
      {
        this.data = res.sessions.filter(
        (data: any) =>
        {
   return (data.available_capacity > 0 && data.min_age_limit <= this.age);
        }
      );
        console.log(this.data);
        this.length = this.data.length;
      },
      (err:any) =>
      {
this.length = -1;
      }
    );
}
}
