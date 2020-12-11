import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ManufacturerComponent} from './manufacturer/manufacturer.component';
import {ModelsComponent} from './models/models.component';

const routes: Routes = [
  {path:'manufacturer',component:ManufacturerComponent},
{path:'models',component:ModelsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
