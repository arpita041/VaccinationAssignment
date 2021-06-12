import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
id:number=0;
date:string='';
  constructor(private http:HttpClient) { }

  getDetailByPin(pin:any,date:any)
  {
     return this.http.get<any>(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`);
  }
  getDataByCurrentLoc(lat:any, lon:any)
  {
    return this.http.get<any>(`https://cdn-api.co-vin.in/api/v2/appointment/centers/public/findByLatLong?lat=${lat}&long=${lon}`)
  }
  getState()
  {
    return this.http.get<any>(`https://cdn-api.co-vin.in/api/v2/admin/location/states`);
  }
  getDistrict(id:any)
  {
    return this.http.get<any>(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`);
  }
  getDataByDisTd(id:any, date:any)
  {
    return this.http.get<any>(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`)
  }
  setCenterI(id:any, date:any)
  {
    this.id = id;
    this.date = date;
    console.log('pin in the service', this.id);
  }
calanderByCenterId()
{
  return this.http.get<any>(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByCenter?center_id=${this.id}&date=${this.date}`)
}

}
