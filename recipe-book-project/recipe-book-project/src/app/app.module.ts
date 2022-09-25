import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './header/shopping-list/shopping-list.component';
import { RecipeBookComponent } from './header/recipe-book/recipe-book.component';
import { ShoppingListEditComponent } from './header/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './header/recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './header/recipe-book/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './header/recipe-book/recipe-detail/recipe-detail.component';
import { ShoppingList1Component } from './header/shopping-list/shopping-list1/shopping-list1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingList1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
