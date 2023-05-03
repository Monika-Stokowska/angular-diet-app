import { Component } from '@angular/core';
import { DietItem } from './interfaces/diet-item';

@Component({
  selector: 'app-root',
  template: `
   <h1>
      Welcome to {{ title }}!
    </h1>

    <app-input-button-unit></app-input-button-unit>

    <ul>
      <li *ngFor = "let dietItem of dietApp">
        <app-diet-item [item] = "dietItem"></app-diet-item>
      </li>
    </ul>

  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-diet-app';
  dietApp: DietItem[] = [
    {title: 'take vitamin B12'},
    {title: 'take magnesium'},
    {title: 'take anti-allergy pill'},
    {title: 'take vitamin H'},
    {title: 'take sodium butyrate'},
    {title: 'take Ashwaganda'},
    {title: 'take Omega-3 fatty acids '},
  ];
}

