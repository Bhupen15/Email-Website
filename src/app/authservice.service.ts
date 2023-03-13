import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Form } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {


  constructor(private http: HttpClient) { }

  IsLoggedIn() {


    return !!localStorage.getItem('session');


  }

  getId() {
    let session = localStorage.getItem('session') as string;

    return session;
  }



  base_url = () => {

    return ("http://localhost/bhupendra/ApiController4/");
  }

  registerUser = (data: any) => {
    this.http.post(this.base_url() + "create", data)
      .subscribe(
        (response) => {
          console.log(response)
        }
      );
  }
  composeEmail = (data: any) => {
    this.http.post(this.base_url() + "create2", data)
      .subscribe(
        (response) => {
          console.log(response)
        }
      );
  }

  loginUser = (data: any) => {
    return this.http.post<any>(this.base_url() + "login", data)

  }


  LoanListData = async (id: any) => {
    return await this.http.get(this.base_url() + `getReceivedMails/${id}`);
  }
  LoanListData2 = async (id: any) => {
    return await this.http.get(this.base_url() + `getSentMails/${id}`);
  }



}
