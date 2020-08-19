import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AuthServiceService} from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formGroup : FormGroup;

  constructor(private authService:AuthServiceService,private router: Router) { }

  ngOnInit() {
    this.initForm();

  }
  initForm(){
    this.formGroup = new FormGroup({
      email : new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required]),
      firstname: new FormControl('',[Validators.required]),
      lastname : new FormControl('',[Validators.required])
    })
  }

  onSubmit() {

}

registerProcess(){
  if(this.formGroup.valid){
    this.authService.register(this.formGroup.value).subscribe(result=>{
      if(result.success){
        console.log(result);
        alert('success');
        this.router.navigate(['/login'])
      }
      else{
        console.log(result);
        alert(result);
      }
    })
  }
}

logincomp(){
  this.router.navigate([''])
}

}
