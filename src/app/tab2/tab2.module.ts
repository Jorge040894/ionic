import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { apiservice } from '../services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { NotificationService } from '../services/notification.service';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }]),
	HttpClientModule
  ],
  declarations: [Tab2Page
  ],
  providers:[apiservice, NotificationService]
})
export class Tab2PageModule {

}
