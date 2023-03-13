import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  path: any;
  constructor(private toastr: ToastrService,  private router: Router) {

  }

  ngOnInit(): void {

    this.router.events.subscribe((val: any) => {
      if (val.url) {
        this.path = val.url;
      }

    })
}


logout(){
//  confirm("Do you want to logout");


 var ask = window.confirm("Do you want to logout");
 if (ask) {
    // console.log("ok clicked");
    localStorage.clear();
    this.router.navigateByUrl('/');
    this.toastr.success('Logged out successfully');
 }
 else {
  console.log("router url",this.router.url);
  
    // console.log("cancel clicked");
    this.router.navigateByUrl(this.router.url);
 }



// let status = document.getElementById("content");  
// if (a == true) {  
//  status.innerHTML = "ok";  
// } else {  
//  status.innerHTML = "Cancel";  
// }  
// localStorage.clear();
// this.router.navigateByUrl('/');
// this.toastr.success('Logged out successfully');

}
}





