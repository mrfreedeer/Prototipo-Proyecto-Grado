import { Component, OnInit} from '@angular/core';
import { CategoriesService } from '../../../../shared/services/categories.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers: [CategoriesService]
})
export class CategoriesComponent implements OnInit {
  dbcategories = []; 
  constructor(private catServices: CategoriesService,
              private router: Router) { }

  
  ngOnInit() {
    this.getCategories();
  }

  getCategories(){
    const service = this.catServices.getCategories().subscribe((res: any) => {
      console.log(res);
      if (res.success) {
        this.dbcategories = res["categories"];
        console.log("Categories brought succesfully");
      }
      service.unsubscribe();
    });
  }

  searchProviders(categoryname){
    if (categoryname) {
      this.router.navigate(['/pages/index/search', {'category': categoryname}])
    }
  }


}
