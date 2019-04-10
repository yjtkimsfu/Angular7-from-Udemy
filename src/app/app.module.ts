import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingListService } from './_services/shopping-list.service';
import { RecipeService } from './_services/recipe.service';
import { DataStorageService } from './_services/data-storage.service';
import { AuthService } from './_services/auth.service';
import { AuthGuard } from './_services/auth-guard.service';
import { RecipesModule } from './recipes/recipes.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModuel } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
   ],
   imports: [
      BrowserModule,
      HttpModule,
      RecipesModule,
      SharedModule,
      ShoppingListModuel,
      AuthModule,
      AppRoutingModule
   ],
   providers: [
     ShoppingListService,
     RecipeService,
     DataStorageService,
     AuthService,
     AuthGuard
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
