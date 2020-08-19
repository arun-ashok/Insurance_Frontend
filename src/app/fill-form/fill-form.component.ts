import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AuthServiceService} from '../auth-service.service';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-fill-form',
  templateUrl: './fill-form.component.html',
  styleUrls: ['./fill-form.component.css']
})
export class FillFormComponent implements OnInit {
  formGroup : FormGroup;
  email=this.cookieService.get('email');

  constructor(private router: Router,private cookieService:CookieService,private http:HttpClient) {
   }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.formGroup = new FormGroup({
      a1 : new FormControl('Perilwise Insurtech Pvt Ltd',[Validators.required]),
      a2 : new FormControl('Insurtech provider',[Validators.required]),
      a3 : new FormControl('Indian Entity',[Validators.required]),
      a4 : new FormControl('Managed IT services',[Validators.required]),
      a5 : new FormControl('Fully managed service provided by vendor for Abhivridhi',[Validators.required]),
      a6 : new FormControl('No.  Source code will not be with BAGIC',[Validators.required]),
      a7 : new FormControl('off site',[Validators.required]),
      a8 : new FormControl('',[Validators.required]),
      a9 : new FormControl('',[Validators.required]),
      a10 : new FormControl('Servers are in India',[Validators.required]),
      a11 : new FormControl('Approved',[Validators.required]),
      a12 : new FormControl('',[Validators.required]),
      a13 : new FormControl('2 years',[Validators.required]),
      a14 : new FormControl('',[Validators.required]),
      a15 : new FormControl('Yes',[Validators.required]),
      a16 : new FormControl('No',[Validators.required]),
      a17 : new FormControl('',[Validators.required]),
      a18 : new FormControl('',[Validators.required]),
      a19 : new FormControl('Avinash Ramachandran',[Validators.required]),
      a20 : new FormControl('',[Validators.required]),
      a21 : new FormControl('',[Validators.required]),
      a22 : new FormControl('',[Validators.required]),
      b1 : new FormControl('',[Validators.required]),
      b2 : new FormControl('',[Validators.required]),
      b3 : new FormControl('Perilwise Insurtech Pvt Ltd',[Validators.required]),
      b4 : new FormControl('Sunil Gopikrishna (sunil@perilwise.tech/9884475674)',[Validators.required]),
      b5 : new FormControl('Angular/Python',[Validators.required]),
      b6 : new FormControl('',[Validators.required]),
      b7 : new FormControl('',[Validators.required]),
      b8 : new FormControl('',[Validators.required]),
    })
  }

  saveform(){
    if(this.formGroup.valid){
      var payload=this.formGroup.value;
      payload['email']=this.email;
      this.http.post<any>('http://localhost:5000/perilwise/v1/companyform', payload).subscribe(result => {
        if(result.success){
          console.log(result);
          alert('success');
          this.initForm();
        
        }
        else{
          console.log(result);
          alert(result);
        }
      })
    }
  }

}
