import { Component, Input } from '@angular/core';
import { collapse } from '../../animation/collapse-animate';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [collapse]
})
export class CardComponent {
  @Input() cardTitle: any;
  @Input() cardSubtitle: any;
  @Input() calification: any;
  @Input() isCollapse: boolean = false;
  @Input() collapse: string = 'off';
  @Input() removeCollapseBtn: boolean = false;

  random = Math.round(Math.random()*30);
  numbers: number[];
  private collapseCard() {
    this.collapse === 'on' ? this.collapse = 'off' : this.collapse = 'on';
  }

  constructor() {
    this.calification = Math.round(Math.random()*5)
    this.numbers = Array(5).fill(0).map((x,i)=> i <= this.calification ? 1 : 0);
   }
}
