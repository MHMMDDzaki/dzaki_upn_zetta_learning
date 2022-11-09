import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialExampleModule } from '../material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core'
import { CardComponent } from './main-menu/card/card.component';
import { CartComponent } from './main-menu/cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { CardDetailComponent } from './main-menu/card/card-detail/card-detail.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

const appRoutes: Routes = [
  {path:'', component: HomeComponent}, // redirect when url is empty
  {path:'main-menu', component: MainMenuComponent},
  {path:'main-menu/card/:name', component: CardDetailComponent},
  {path:'**', component: ErrorComponent} // to redirect when url is not defined
]

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CartComponent,
    CardDetailComponent,
    MainMenuComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MaterialExampleModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
