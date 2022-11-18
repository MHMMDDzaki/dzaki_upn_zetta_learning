import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from './material.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SendDataComponent } from './send-data/send-data.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'send-data', component: SendDataComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SendDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    MatSidenavModule,
    MatCardModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
