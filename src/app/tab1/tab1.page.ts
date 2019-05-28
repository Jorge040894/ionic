/*import { Component } from '@angular/core';*/

import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {apiservice} from '../services/api.service';
import {FormControl, FormGroup} from '@angular/forms';
import {campos} from '../classes/campos';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page /*implements OnInit, OnDestroy, AfterViewInit*/ {
  //creamos una variable en la cual indicamos que resive datos de cualquir tipo
  //indicamos los parametros que contendra lo cuales utlizaremos en el spring
  //y las declaramos de forma global para sehir usandolas 
  person: any = {
    primerNombre: '',
    segundoNombre: '',
    edad: ''
  };
  
  personas: any[]; // una propiedad que recibe datos de cualquier tipo 

  action: string = 'agregar'; // se crea una propiedad que se utilizara para un boton

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