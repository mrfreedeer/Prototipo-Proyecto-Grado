import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from './../../../../shared/services/search.service';
import { subscribe } from 'graphql';
import swal from 'sweetalert2';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit, OnDestroy {

  searchString: string;
  results = [];
  routesub: any;
  gridView = false;
  category: string;
  
  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService
  ) {}
  ngOnInit() {
    this.routesub = this.route.paramMap.subscribe(params => {
      this.searchString = params.get('searchString');
      this.category = params.get('category');
      const sub = this.searchService.search(JSON.stringify({
        SearchString: this.searchString && this.searchString !== '' ? this.searchString : '',
        Category: this.category && this.category !== '' ? this.category : ''
      }))
      .subscribe((res:any) => {
        if (res.success) {
          console.log(this.results);
          this.results = res.data;
        }
        sub.unsubscribe();
      })
    }); 
  }

  ngOnDestroy() {
    this.routesub.unsubscribe();
  }

  changeView() {
    this.gridView = !this.gridView
  }

}
