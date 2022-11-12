import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialExampleModule } from 'src/material.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './home/add-user/add-user.component';
import { UsersComponent } from './home/users/users.component';
import { EditUserComponent } from './home/edit-user/edit-user.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'add-user', component: AddUserComponent},
  {path:'edit-user', component: EditUserComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddUserComponent,
    UsersComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialExampleModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
