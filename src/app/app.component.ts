import { Component } from '@angular/core';
import {RecipeService} from './recipe/recipe.service';
@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  styles: [],
  providers: [RecipeService]
})
export class AppComponent {

}
