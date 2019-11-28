import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from '../../shared/services/categories.service';
import swal from 'sweetalert2';
import { UsersService } from '../../shared/services/users.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [CategoriesService, UsersService]
})



export class RegisterComponent implements OnInit {
  @ViewChild('wizard') wiz;
  userTypeSwitch = false;
  containsnumber = /\d/;
  themeCategories = []
  submitted: boolean = false;
  registerForm: FormGroup;

  


  constructor(
    private router: Router,
    private categories: CategoriesService,
    private users: UsersService
  ) {

    
   }

  ngOnInit() {
    this.registerForm = new FormGroup({
      personalInfo: new FormGroup({
        name: new FormControl('', [Validators.minLength(2), Validators.required]),
        lastname: new FormControl('', [Validators.minLength(2), Validators.required]),
        email: new FormControl('', [Validators.email, Validators.required]),
        address: new FormControl('', [Validators.minLength(6), Validators.required]),
        phone: new FormControl('', [Validators.required, Validators.min(10)]),
        password: new FormControl('', [Validators.minLength(8), Validators.required, Validators.pattern(this.containsnumber)]),
        confirmPassword: new FormControl('', []),
      }, {validators: this.checkPasswords}),
      businessInfo: new FormGroup({
        businessname: new FormControl('', [Validators.minLength(2), Validators.required]),
        businessdescription: new FormControl('', [Validators.required, Validators.minLength(20)]),
        address: new FormControl('', [Validators.minLength(6), Validators.required]),
        servicecategories: new FormControl('', [Validators.required])
      })
    });
    this.getCategories();
  }

  checkPasswords(registerForm: FormGroup) { // here we have the 'passwords' group
    let password = registerForm.controls.password.value;
    let confirm = registerForm.controls.confirmPassword.value;
  
    if (confirm.length <=0) return null;
    if(confirm !== password) return {doesMatchPassword: true};
    return null;

  }
  
  getCategories(){
    const service = this.categories.getCategories().subscribe((res: any) => {
      console.log(res);
      if (res.success) {
        res["categories"].forEach(element => {
          this.themeCategories.push(element.name);
        });

         
        console.log("Categories brought succesfully");
      }
      service.unsubscribe();
    });
  }
  checkAWStep(){
    if (!this.userTypeSwitch){
      this.wiz.goToPreviousStep();
    }
  }

  onSubmit() {
    this.submitted = true;  
    console.log(this.registerForm.value);
    if (this.userTypeSwitch){
      this.registerForm.get("personalInfo")["controls"].address
      .setValue(this.registerForm.get("businessInfo")["controls"].address.value);
    }
    if ((!this.registerForm.valid && this.userTypeSwitch)||
    (!this.registerForm.controls.personalInfo.valid && 
      !this.userTypeSwitch)){
        console.log(this.registerForm);
        swal({  
          type: 'error',
          title: 'Formulario inválido',
          text: '...', // TODO Poner aquí la descripción del error
        });
    }else{
      let user = {
        ...this.registerForm.controls.personalInfo.value,
        ...this.registerForm.controls.businessInfo.value
      }     
      user.usertype = (this.userTypeSwitch)? 1:0;
      if (this.userTypeSwitch){
        user.offeredservices = user.offeredservices.toString();
        user.servicecategories = user.servicecategories.toString()
        user.address =   this.registerForm.get("businessInfo")["controls"].address.value;
      }else{
        user.address =   this.registerForm.get("personalInfo")["controls"].address.value;
  
      }
      user.phone = user.phone.toString();
  
      console.log(JSON.stringify(user));
      const service = this.users.register(JSON.stringify(user)).subscribe((res: any) => {
        console.log(res);
        if (res.success) {
          swal({
            type: 'success',
            title: 'Registro exitoso',
            text: 'Bienvenido a Trouce!',
        });
        this.router.navigateByUrl('/login');
      } else {
        swal({
          type: 'error',
          title: 'Oops...',
          text: 'Algo salió mal!',
        });
      }
      service.unsubscribe();
    } );
    }
  }
  
  handleKeyEnter(event) {
    event.preventDefault();
  }

}