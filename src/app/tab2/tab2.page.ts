import { Component } from '@angular/core';
/*import { NavController } from 'ionic-angular';*/
import { apiservice } from '../services/api.service';
import { campos } from '../classes/campos';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


/*lstcampos:any;*/

constructor(/*public navCtrl: NavController, */public servicio: apiservice){
}
/*
ionViewDidLoad(){
	this.servicio.obtener().subscribe(
		(data) => {
		this.lstcampos = data;		
		},
		(error) => {
		console.error(error);
		}
	)
}*/

   lstcampos:campos[];

    ngOnInit(){
  	  this.servicio.obtener().subscribe
		(
		data => 
		{
		this.lstcampos = data;
		}
		);

}


/*private _apiservice: apiservice*/
  


  }