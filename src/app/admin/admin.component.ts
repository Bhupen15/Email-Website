import { Component, ViewEncapsulation } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { loanData } from '../interface';
import { AuthserviceService } from '../authservice.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['../../assets/css/boxicons.min.css', '../../assets/css/bootstrap.min.css', '../../assets/css/style.css', './admin.component.css'],
  // encapsulation:ViewEncapsulation.None
})
export class AdminComponent {
  pageSet(totalPage: any) {
    throw new Error('Method not implemented.');
  }

  hello(b: number) {
    this.page = b;
    this.loadUser()

  }
  changeLimit(target: any) {
    this.pageLimit = target.value;
    this.loadUser();
  }

  data: any;
  pageLimit = 5;
  page = 1;
  totalPage: any;
  totalUser: any;
  userRows: any;
  userData: any;
  pageArray: number[] = [];
  
  Obj=localStorage.getItem('session') as string;
  id=JSON.parse(this.Obj)?.id;

  constructor(private authService: AuthserviceService, private toastr: ToastrService) {
    this.loadUser();
  }

  loadUser = () => {
    this.authService.getAlluser(this.page, this.pageLimit).subscribe((res: any) => {
      console.log(res)
      this.data = res.messages.data;
      this.totalPage = res.messages.totalPages;
      
      this.pageArray = Array(this.totalPage).fill(0).map((x, i) => i + 1);


    })
  }

//   userdelete = (sno: string) => {
//     if (this.authService.userDelete(sno))  {
   
//      {
    
//       this.loadUser().subscribe((res: any) => setUsers(res.data.messages.data));
//       this.toastr.success('User Deleted');

//     }
//     else {
//       this.toastr.error('Error in Deletion');
//     }
//   }

// }

// function setUsers(data: any) {
//   throw new Error('Function not implemented.');
// }


userdelete = (id:any) => {


  this.authService.userDel(id).subscribe(res => {
    console.log(res);
    this.loadUser();
  })

}
}