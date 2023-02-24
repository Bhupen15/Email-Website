import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  loanDataById(id: any) {
    // throw new Error('Method not implemented.');

    return this.http.get(this.base_url()+"userdetail/"+id);
  }


  toaster: any;
  login(item: any) {
    // throw new Error('Method not implemented.');
  }



  constructor(private http: HttpClient) { }
  base_url = () => {

    return ("http://localhost/bhupendra/ApiController/");
  }

  registerUser = (data: any) => {
    this.http.post(this.base_url() + "create", data)
      .subscribe(
        (response) => {
          console.log(response)
        }
      );
  }

  loginUser = (data: any) => {
    return this.http.post<any>(this.base_url() + "login", data)

  }
  getToken() {

    return localStorage.getItem('token');
  }


  getAlluser = (page=1,pagelimit=5) => {
  
    return this.http.get(this.base_url()+`index?page=${page}&pagelimit=${pagelimit}`,{
      headers:{
        Authentication: this.getToken()as string,
      },
    });
  
  }

//  userDelete = (sno: string) => {


//     if (window.confirm('Do you really want to Delete')) {
//       return this.http.delete<boolean>(this.base_url()+`delete/${sno}`);
//     }
//     this.toaster.error('Deletion cancelled');
//     return;
//   }

  userDel = (id:any) => {
    return this.http.delete(`${this.base_url()}delete/${id}`)
  }
}
