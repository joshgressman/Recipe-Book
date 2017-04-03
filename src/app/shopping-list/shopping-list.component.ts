import { Component, OnInit } from '@angular/core';
import {ShoppingListAddComponent} from './shopping-list-add.component';
import {Ingredient} from '../recipe/ingredient';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html',
  styles: []
})
export class ShoppingListComponent implements OnInit {
   items: Ingredient[];
  constructor() { }

  ngOnInit() {
  }

}
