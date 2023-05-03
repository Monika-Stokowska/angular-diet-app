import { Component, Input, OnInit } from '@angular/core';
import { DietItem } from '../interfaces/diet-item';

@Component({
  selector: 'app-diet-item',
  template: `
    {{ item.title }}
  `,
  styleUrls: ['./diet-item.component.scss']
})
export class DietItemComponent implements OnInit {

  @Input() item: DietItem;

  constructor() {}

  ngOnInit(): void {}
}
