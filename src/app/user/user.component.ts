import { Component } from '@angular/core';
import { loanData } from 'src/app/interface';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  isPresent=null;
  session = localStorage.getItem("session") as string;
  id = JSON.parse(this.session).id;
  loanValues: loanData | any = null;
  constructor(private authService: AuthserviceService, private router: Router) {
    this.loadRequest();
  }
  loadRequest = async () => {
    ( this.authService.loanDataById(this.id)).subscribe((res:any) => {
       this.loanValues = res;
       this.isPresent = this.loanValues.loanid;
      });
  }
}