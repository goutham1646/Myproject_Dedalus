import { Component } from '@angular/core';
import { ItemListComponent } from './item-list/item-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ItemListComponent],
  template: `
    <h1>My App</h1>
    <app-item-list></app-item-list>
  `
})
export class AppComponent { }