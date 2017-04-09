import { Injectable } from '@angular/core';
import{Recipe} from "./recipe";
import {Ingredient} from './ingredient';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
      new Recipe('Schnitzel', 'Very tasty', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [
        new Ingredient('french fries', 2),
        new Ingredient('pork meat', 1)
      ]),
      new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
    ];
  constructor() { }

 getRecipes(){
   return this.recipes;
 }

}
