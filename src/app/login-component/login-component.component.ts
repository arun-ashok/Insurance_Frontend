import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AuthServiceService} from '../auth-service.service';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  formGroup : FormGroup;
  private username : string;

  constructor(private authService:AuthServiceService,private router: Router,private cookieService:CookieService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formGroup = new FormGroup({
      email : new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required])
    })
  }

  loginProcess(){
    if(this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe(result=>{
        if(result.success){
          console.log(result);
          alert(result.message);
          alert(result.username);
          this.cookieService.set('username',result.username)
          this.router.navigate(['/dashboard'])
        }
        else{
          console.log(result);
          alert(result.message);
        }
      })
    }
  }

}
