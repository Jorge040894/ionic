import { Component } from '@angular/core';
/*import { NavController } from 'ionic-angular';*/
import { apiservice } from '../services/api.service';
import { campos } from '../classes/campos';
import {BehaviorSubject} from 'rxjs/index';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


/*lstcampos:any;*/

constructor(public servicio: apiservice,
			private notificationService: NotificationService) {
}

   lstcampos:campos[];
   public envivo: BehaviorSubject<any>;

    ngOnInit() {
		this.envivo = new BehaviorSubject(null);

    	// realizar suscripcion
		this.doNotificationSubscription();
	
		this.servicio.obtener().subscribe(data =>{
			this.lstcampos = data;
        	this.envivo.next(this.lstcampos);
		});
	}

	public doNotificationSubscription(): void {
		try {
		  this.notificationService.getPersonaNotification().subscribe((result) => {
			this.handleMessageReceived(result);
		  });
		} catch (e) {
		  console.log(e);
		}
	}

	private handleMessageReceived(message: any): void {
		console.log(message);
		this.lstcampos.push(JSON.parse(message));
	} 
}