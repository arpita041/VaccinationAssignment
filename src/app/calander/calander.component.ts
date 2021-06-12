import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-calander',
  templateUrl: './calander.component.html',
  styleUrls: ['./calander.component.scss']
})
export class CalanderComponent implements OnInit {

  constructor(private service: GetDataService, private router:Router) { }
data:any;
sessions:any;
centerName:any;
centerAddress:any;
district:any;
state:any;
pinCode:any;
len:number=1;
fee:any;
  ngOnInit(): void {
    this.service.calanderByCenterId().subscribe(res=>
      {
      //  this.data = res;
     //   console.log(this.data);
        this.data = res.centers;  
        console.log(this.data);
        if( this.data)
        {
          console.log("data is not null")
      this.centerName = this.data.name;
      this.centerAddress = this.data.address;
      this.district = this.data.district_name;
      this.state = this.data.state_name;
      this.pinCode = this.data.pincode;
      this.fee= this.data.fee_type;
    //  console.log(this.centerName);
        this.sessions = this.data.sessions;
    //    console.log(typeof(this.sessions));
     //   console.log(this.data);
       // console.log(this.sessions);
        }
        else{
          console.log("data is null")
          this.len=0;
        }
        (err:any)=>
        {
 this.router.navigate(['/home']);
        }
      })
    }
}
