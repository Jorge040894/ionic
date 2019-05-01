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


/*
  // definir "FormGroup" para ingreso de datos por formulario
  public formGroup: FormGroup;

  constructor(private apiservice: apiservice) {

  }

    public onClick(): void {
    console.log('on click');
  }

   public enviarFormulario(): void {
    console.log('Datos de formulario:' + JSON.stringify(this.formGroup.value));

    let parametros: any = null;
    parametros = Object.assign({}, this.formGroup.value);

    let datosAEnviar: any = {
      primerNombre: parametros.nombre,
      segundoNombre: parametros.apellido,
      edad: parametros.edad
    };

    console.log('Datos a enviar:' + JSON.stringify(datosAEnviar));

    this.apiservice.create(datosAEnviar).subscribe(result => {
      console.log('Datos from server:' + JSON.stringify(result));
    });
  }


  public actualizarFormulario(): void {

    let parametros: any = null;
    parametros = Object.assign({}, this.formGroup.value);

    let datosAEnviar: any = {
      primerNombre: parametros.nombre,
      segundoNombre: parametros.apellido,
      edad: parametros.edad
    };

    console.log('Datos a enviar:' + JSON.stringify(datosAEnviar));

    this.apiservice.update(datosAEnviar).subscribe(result => {
      console.log('Datos from server:' + JSON.stringify(result));
    });
  }

  /*
   private initForm(): void {
    this.formGroup = new FormGroup({
      nombre: new FormControl('', []
      ),
      apellido: new FormControl('', []
      ),
      edad: new FormControl('', []
      )
    }); 


  }

  ngAfterViewInit(): void {
    console.log('on after view');
  }

  ngOnDestroy(): void {
    console.log('on destroy');
  }

 

  ngOnInit(): void {

    console.log('on init');

    // iniciar formulario
    this.initForm();

    
    // ejecutar llamada de servicio restful al iniciar la aplicacion
    this.apiservice.personaList(null).subscribe((result) => {
        console.log('RESULTADO:' + JSON.stringify(result));
      });
	  */


}







 
 



 
      


