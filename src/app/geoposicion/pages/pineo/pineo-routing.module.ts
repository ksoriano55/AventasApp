import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PineoPage } from './pineo.page';

const routes: Routes = [
  {
    path: '',
    component: PineoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PineoPageRoutingModule {}
