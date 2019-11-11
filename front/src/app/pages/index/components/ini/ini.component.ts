import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ini',
  templateUrl: './ini.component.html',
  styleUrls: ['./ini.component.scss']
})
export class IniComponent implements OnInit {
  @ViewChild('nav') nav: any;

  imageObject: Array<object> = [{
    thumbImage: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1332&q=80',
    alt: 'Servicios empresariales',
    title: 'Servicios empresariales'
  },
  {
    thumbImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    title: 'Desarrollo'
  },
  {
    thumbImage: 'https://images.unsplash.com/photo-1516554646385-7642248096d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    title: 'Chefs'
  }, {
    thumbImage: 'https://cdn.pixabay.com/photo/2015/01/08/18/23/white-board-593309_960_720.jpg',
    title: 'Matemática' 
  },
  { 
    thumbImage: 'https://images.unsplash.com/photo-1534755563369-ad37931ac77b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    title: 'Arreglos y manutenciones'
  },
  {
    thumbImage: 'https://images.unsplash.com/photo-1548101307-a757d5f06d27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: 'Psicólogos'
  }
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  imageClick(e) {
    let category = this.nav.imageObj[e].title
    this.router.navigate(['/pages/index/search', {'searchString': category}])    
  }
}
