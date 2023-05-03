import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-diet-item',
  template: `
    {{ item.title }}
  `,
  styleUrls: ['./diet-item.component.scss']
})
export class DietItemComponent implements OnInit {

  @Input() item: any;

  constructor() {}

  ngOnInit(): void {}
}
