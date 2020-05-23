import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { DataService } from './data/data.service';
import { AppComponent } from './app.component';
import { MyListComponent } from './pages/mylist/mylist.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { ListComponent } from './shared/list/list.component';
import { SortService } from './shared/services/sort.service';

@NgModule({
  declarations: [
    AppComponent,
    MyListComponent,
    CategoriesComponent,
    FavoritesComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    DataService,
    SortService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
