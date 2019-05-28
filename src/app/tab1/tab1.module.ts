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
 //creamos una variable en la cual indicamos que resive datos de cualquir tipo
  //indicamos los parametros que contendra lo cuales utlizaremos en el spring
  //y las declaramos de forma global para sehir usandolas 
  person: any = {
    primerNombre: '',
    segundoNombre: '',
    edad: ''
  };
  personas: any[]; // una propiedad que recibe datos de cualquier tipo 

  action: string = 'agregar';// se crea una propiedad que se utilizara para un boton

  constructor(private personaService: apiservice) {
    this.getRefresh();
  }
// el sendForm nos sirve para enviar los datos via post este lo llamamos 
//desde el html y se le instancia a un boton para su ejecucion y tambien la usamos para el Put

  sendForm(){
    //No permite que las casillas nombre y apellido envien datos vacios 
    if(this.person.primerNombre != '' && this.person.segundoNombre != '') {
      if (this.action == 'agregar'){
        this.personaService.create(this.person).subscribe(response => {
          this.getRefresh();
          this.person = {
            primerNombre: '',
            segundoNombre: '',
            edad: ''
          }; 
        });
      }
      if (this.action == 'actualizar'){
        console.log('Update');
        console.log(this.person);
        this.personaService.update(this.person).subscribe(response => {
          this.getRefresh();
          this.person = {
            primerNombre: '',
            segundoNombre: '',
            edad: ''
          };
          this.action = 'agregar' 
        });
      }

    }
  }



  getRefresh(){
    this.personaService.personaList([]).subscribe(response=>{
      this.personas = response;
    });
  }

  showItem(item: any, index: number) {
    this.action = 'actualizar';
    this.person.id = index;
    this.person.primerNombre = item.primerNombre;
    this.person.segundoNombre = item.segundoNombre;
    this.person.edad = item.edad;
  }





}
