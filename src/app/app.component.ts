import { Component } from '@angular/core';
import {RecipeService} from './recipe/recipe.service';
import {ShoppingListService} from './shopping-list/shopping-list.service';
@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  styles: [],
  providers: [RecipeService,ShoppingListService]
})
export class AppComponent {

}
