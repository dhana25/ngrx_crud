import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssociatelistComponent } from './component/associatelist/associatelist.component';
import { AddassociateComponent } from './component/addassociate/addassociate.component';
import { MaterialModule } from './Material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { AssociateReducer } from './store/Associate/Associate.Reducer';
import { AssociateEffect } from './store/Associate/Associate.Effetc';
import { AppEffect } from './store/common/App.Effect';


@NgModule({
  declarations: [
    AppComponent,
    AssociatelistComponent,
    AddassociateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({associate:AssociateReducer}),
    EffectsModule.forRoot([AssociateEffect,AppEffect]),
    //StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
