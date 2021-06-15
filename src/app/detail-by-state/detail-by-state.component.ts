import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-detail-by-state',
  templateUrl: './detail-by-state.component.html',
  styleUrls: ['./detail-by-state.component.scss']
})
export class DetailByStateComponent implements OnInit {
state: any = [];
id: any = [];
district: any = [];
selectedDistrict: any;
len = 0;
disId: any;
date: any;
vacLen: any = 0;
vaccinationData: any;
date1 = new Date();
day = this.date1.getDate();
mon = this.date1.getMonth() + 1;
year = this.date1.getFullYear();
finalDate = '';
centerId: any;
  constructor(private service: GetDataService) { }
oneState = 'Uttar Pradesh';
  ngOnInit(): void {
    this.statesList();
  }
  getCenterId(data: any):any
  {
   this.centerId = data.center_id;
   console.log(this.centerId);
   this.finalDate = this.day + '-' + this.mon + '-' + this.year;
   console.log(this.finalDate);
   this.service.setCenterI(this.centerId, this.finalDate);
  }
  statesList():any
  {
    this.service.getState().subscribe((res:any) =>
      {
        this.state = res.states;
      //  console.log(this.state);
      });
  }
  findStateId():any
  {
    this.state.forEach((element: any) => {
      if (element.state_name == this.oneState)
      {
        this.id = element.state_id;
        console.log(this.id);
      }
    });
  }
  selectChangeHandler(event: any):any {
    // update the ui
    this.oneState = event.target.value;
    console.log(this.oneState);
    this.findStateId();
    this.service.getDistrict(this.id).subscribe((res:any) =>
      {
        this.district = res.districts;
        this.len = this.district.length;
    //    console.log(this.district);
      });
  }
  districtName(event: any):any
  {
   this.selectedDistrict = event.target.value;
   console.log(this.selectedDistrict);
   this.findDisId();
  }
  findDisId():any
  {
    this.district.forEach((element: any) => {
 if (element.district_name = this.selectedDistrict)
 {
   this.disId = element.district_id;
 }
    });
   // console.log(this.disId);
  }
  getDetails():any
  {
    this.service.getDataByDisTd(this.disId, this.date).subscribe((res:any) =>
      {
        this.vaccinationData = res.sessions.filter((data: any) =>
        {
          return data.available_capacity > 0;
        });
     //   console.log(this.vaccinationData);
        this.vacLen = this.vaccinationData.length;

      });
  }
}
