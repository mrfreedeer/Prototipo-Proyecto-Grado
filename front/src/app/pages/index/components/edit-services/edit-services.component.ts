import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OfferedservicesService } from './../../../../shared/services/offeredservices.service';
import swal from 'sweetalert2';
import { CategoriesService } from '../../../../shared/services/categories.service';

@Component({
  selector: 'app-edit-services',
  templateUrl: './edit-services.component.html',
  styleUrls: ['./edit-services.component.scss'],
  providers: [OfferedservicesService]
})
export class EditServicesComponent implements OnInit {
  themeCategories = [];
  servicesList = [];
  currentServices = []
  modifiedServices = []
  constructor(private offeredServices: OfferedservicesService,
              private categories: CategoriesService) { }
  isnumber = /^(?:(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))|(?:0|(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))))(?:.\d+|)$/;
  serviceTemplate = new FormGroup({
    name : new FormControl('', [Validators.required]),
    description : new FormControl('', [Validators.required]),
    categories: new FormControl('', [Validators.required]),
    price : new FormControl('', [Validators.required, Validators.pattern(this.isnumber)]),
    notes: new FormControl(''),
    userid: new FormControl('')
  });
  
  ngOnInit() {
    this.getCategories();
    this.getServices();
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
  addService(){
    this.servicesList.push(this.serviceTemplate);
  }

  getServices(){
    const serv = this.offeredServices.getServices()
      .subscribe((res : any) => {
        debugger
        if(res.success){
          res["services"].forEach(element => {
            this.currentServices.push(element);
          });
        }else{
          console.log("No se pudieron traer los servicios");
        }
        serv.unsubscribe();
      }, (err:any) => {
          console.error(err);
      });
  }

  editService(){
    
  }

  saveServices(){  
    this.servicesList.forEach(addedService => {
      debugger
      let createdService = addedService.value;
      createdService.userid = localStorage.getItem("userid") ;
      createdService.categories = createdService.categories.toString();
      const serv = this.offeredServices.createService(JSON.stringify(createdService))
      .subscribe((res:any)=>{
        if(res.success){
          swal({
            type: 'success',
            title: 'Servicios guardados',
            text: 'Servicios guardados exitosamente',
          });
          serv.unsubscribe();
        }else{
          swal({
            type: 'error',
            title: 'Oops...',
            text: 'Lo sentimos, no pudimos guardar los servicios',
          });
          console.error(res.message);
        }
      }, (err : any) => {
        swal({
          type: 'error',
          title: 'Oops...',
          text: 'Algo salió mal! Inténtalo de nuevo más tarde',
        });
        console.error(err);
      });
    });

  }

}
