import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { emailData } from '../interface';


@Component({
  selector: 'app-sentitem',
  templateUrl: './sentitem.component.html',
  styleUrls: ['./sentitem.component.css', '../../assets/css/email.css']
})
export class SentitemComponent implements OnInit {
  sno(sno: any) {
    throw new Error('Method not implemented.');
  }
  loanValues: any | emailData;




  constructor(private toastr: ToastrService, private authService: AuthserviceService, private router: Router) { }

  composeEmail = new FormGroup({

    email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}')]),

  });


  get email() { return this.composeEmail.get('email'); }
  valid = true;

  getId = () => {

    let session = localStorage.getItem("session");
    if (session) {
      let id = JSON.parse(session).id;
      return id;
    }
    return 0;
  }

  getdata(event :any) {
 const data=new FormData(event.target);
    data.set("senderId",  this.getId());
    console.log(data);


    this.authService.composeEmail(data);


    this.click();
  }

  click = () => {
    this.router.navigate(['/inbox']);
    this.toastr.success('User registered successful');
  }


  setUser = async () => {

    this.loanValues = null;


    (await this.authService.LoanListData2(this.getId())).subscribe((res: any) => {
      this.loanValues = res.messages.result.reverse();


    })
  }

  ngOnInit() {

    this.setUser();

  }
   
}