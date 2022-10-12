import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Worlds Best Lasagna',
    'It takes a little work, but it is worth it.',
    'https://imagesvc.meredithcorp.io/v3/mm/image?url=https://public-assets.meredithcorp.io/eaf2a87ca2376e9dca53110c86de9d30/166473878223120221001_180626.jpg&q=60&c=sc&orient=true&poi=auto&h=512',
    [
      new Ingredient('Lasagna noodles', 24),
      new Ingredient('Tomato Sauce', 2)
    ]),
    new Recipe('Grilled Cheese Sandwich',
    'Bread, butter and Cheddar cheese - here is a way to make this classic sandwich',
    'https://imagesvc.meredithcorp.io/v3/mm/image?url=https://images.media-allrecipes.com/userphotos/9136773.jpg&q=60&c=sc&orient=true&poi=auto&h=512',
    [
      new Ingredient('Meat Sauce', 2),
      new Ingredient('Buns', 4)
    ])
  ];

constructor(private slService: ShoppingListService) {}

getRecipes() {
  return this.recipes.slice();
}

addIngredientsToShoppingList(ingredients: Ingredient[]) {
  this.slService.addIngredients(ingredients);
}

}
