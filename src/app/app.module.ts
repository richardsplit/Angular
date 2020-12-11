import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { ShowManComponent } from './manufacturer/show-man/show-man.component';
import { AddEditManComponent } from './manufacturer/add-edit-man/add-edit-man.component';
import { ModelsComponent } from './models/models.component';
import { ShowModComponent } from './models/show-mod/show-mod.component';
import { AddEditModComponent } from './models/add-edit-mod/add-edit-mod.component';
import {SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http' ;
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ManufacturerComponent,
    ShowManComponent,
    AddEditManComponent,
    ModelsComponent,
    ShowModComponent,
    AddEditModComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
