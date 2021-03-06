import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from '../recipe';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {Ingredient} from '.././ingredient';


@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styles: []
})
export class RecipeDetailComponent implements OnInit {
  @Input()  selectedRecipe: Recipe;


  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  }

  onAddToShoppingList(){
    this.sls.addItems(this.selectedRecipe.ingredients);
  }

}
