import { Component, OnInit } from '@angular/core';
import { loanData } from 'src/app/interface';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  isPresent = null;

  session = localStorage.getItem("session") as string;
  id = JSON.parse(this.session).id;
  loanValues: loanData | any = null;
  loanAmount:number=0;
  duration:number=0;
  emiResponse:any;
  date = new Date();
  visible:boolean=false;
  
  constructor(private authService: AuthserviceService, private router: Router) {
    this.loadRequest();
  }
  loadRequest = async () => {
    (this.authService.loanDataById(this.id)).subscribe((res: any) => {
      this.loanValues = res;
      this.isPresent = this.loanValues.loanid;
      console.log(res)
    });
  }

  ngOnInit(){
    (this.authService.loanDataById(this.id)).subscribe((res: any) => {
      this.loanValues = res;
      this.isPresent = this.loanValues.loanid;
      console.log(res)
      console.log(this.loanValues);
   this.loanAmount = Number(this.loanValues.loanamount);
   this.duration = Math.floor((this.loanValues.duration)/12);

   this.authService.emi(Number(this.loanValues.loanamount),Math.floor((this.loanValues.duration)/12)).subscribe((res)=>{
    console.log(res);
    this.emiResponse= res;

   }) 
    });
   
  }
}