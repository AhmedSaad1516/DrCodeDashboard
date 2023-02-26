import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  show:boolean=false
  unshow:boolean=true
  constructor(private router:Router , private toster:ToastrService , private spiner:NgxSpinnerService) { }

  ngOnInit(): void {
  }

 
   
  ok(){
    this.show=true
    this.unshow=false
  }

  logout(){

    localStorage.removeItem('token')
this.router.navigateByUrl('/login')
this.toster.success('Successfully exited',"", {
  disableTimeOut:false,
 titleClass:"toastr_title",
 messageClass:"toastr_message",
 timeOut:800,
 closeButton:true
})
let audio= new Audio()
audio.src="../../../../assets/notification-sound/notification-sound-7062 (1).mp3"
audio.load()
audio.play()

  }
}