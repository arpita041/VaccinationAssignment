import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
id = 0;
date = '';
  constructor(private http: HttpClient) { }

  getDetailByPin(pin: any, date: any) :any
  {
     return this.http.get<any>(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`);
  }
  getDataByCurrentLoc(lat: any, lon: any):any
  {
    return this.http.get<any>(`https://cdn-api.co-vin.in/api/v2/appointment/centers/public/findByLatLong?lat=${lat}&long=${lon}`);
  }
  getState():any
  {
    return this.http.get<any>(`https://cdn-api.co-vin.in/api/v2/admin/location/states`);
  }
  getDistrict(id: any):any
  {
    return this.http.get<any>(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`);
  }
  getDataByDisTd(id: any, date: any):any
  {
    return this.http.get<any>(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`);
  }
  setCenterI(id: any, date: any):any
  {
    this.id = id;
    this.date = date;
    console.log('pin in the service', this.id);
  }
calanderByCenterId():any
{
  return this.http.get<any>(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByCenter?center_id=${this.id}&date=${this.date}`);
}

}
