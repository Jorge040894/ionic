import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { HttpClientModule } from '@angular/common/http';
import { apiservice } from '../services/api.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
    HttpClientModule
  ],
  declarations: [Tab1Page],
  providers:[apiservice]
})
export class Tab1PageModule {
 

}
