import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminService } from '../services/admin.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup
  ErrorPassword:boolean=false
  constructor(private fb:FormBuilder ,
     private services:AdminService ,
      private spinner:NgxSpinnerService,
      private toastr: ToastrService,
      private router:Router) { }


  ngOnInit(): void {
    this.creatForm()
  }

  creatForm(){
    this.loginForm=this.fb.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]],
      role:['admin']
     
    })
  }
  login() {
   let model= this.creatFormData()
    this.spinner.show()
    this.services.loginAdmin(model).subscribe((data:any)=>{
       localStorage.setItem("token", data.token)
this.toastr.success('Logged in successfully',"", {
  disableTimeOut:false,
 titleClass:"toastr_title",
 messageClass:"toastr_message",
 timeOut:800,
 closeButton:true,
 progressBar:true
})

let audio= new Audio()
audio.src="../../../../assets/notification-sound/login.wav"
audio.load()
audio.play()

this.router.navigateByUrl('/home')
this.spinner.hide()

    }, error =>{
      this.spinner.hide()    
this.ErrorPassword=true

      this.toastr.error('The Email Or Password Is Not Valid',"", {
        disableTimeOut:false,
       titleClass:"toastr_title",
       messageClass:"toastr_message",
       timeOut:800,
       closeButton:true,
       progressBar:true
      })

      let audio= new Audio()
audio.src="../../../../assets/notification-sound/login.wav"
audio.load()
audio.play()

this.router.navigateByUrl('/login')


})

  }
    

  creatFormData(){
    let formdata = new FormData()
    Object.entries(this.loginForm.value).forEach(([key , value]:any) => {
      formdata.append(key , value)
    })
    return formdata
  }
}
