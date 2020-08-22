import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators, FormArray,FormBuilder, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  formGroup : FormGroup;
  data:any;


  constructor(private cookieService:CookieService,private http:HttpClient,private fb: FormBuilder,private router: Router) { 
    this.username=this.cookieService.get('username')
    this.email=this.cookieService.get('email')
  }

  username=this.cookieService.get('username')
  email=this.cookieService.get('email')


  ngOnInit(): void {
    this.initForm();
    this.http.get('http://localhost:5000/perilwise/v1/companyform',{params:{email:this.email}}).subscribe(result => {
      this.data = result;
      console.log(result);
      alert(result);
    })
  }

  initForm(){
    this.formGroup = new FormGroup({
      company_name : new FormControl('',[Validators.required]),
      contact_person : new FormControl('',[Validators.required]),
      company_email : new FormControl('',[Validators.required]),
      company_address : new FormControl('',[Validators.required]),
    })
  }

addCompany(){
  if(this.formGroup.valid){
    var payload=this.formGroup.value;
    payload['email']=this.email;
    this.http.post<any>('http://localhost:5000/perilwise/v1/company', payload).subscribe(result => {
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

logoutFunction(){
  this.cookieService.deleteAll()
  this.router.navigate([''])
}

}