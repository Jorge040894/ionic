import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { apiservice } from './services/api.service';
import { campos } from './classes/campos';
import {Tab1Page} from './tab1/tab1.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent {
/*
 public formGroup: FormGroup;
 */


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
	
  ) {
    this.initializeApp();
  }

  /*
   let parametros: any = null;
    parametros = Object.assign({}, this.formGroup.value);

    let datosAEnviar: any = {
      primerNombre: parametros.nombre,
      segundoNombre: parametros.apellido,
      edad: parametros.edad
    };
	*/

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
	
  }


}

