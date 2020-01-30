import { Component, NgModule } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  toast: any;

  constructor(private barcodeScanner: BarcodeScanner, private toastController: ToastController, private router: Router) {

  }

  showToast(msg) {
    this.toast = this.toastController.create({
      message: msg,
      duration: 2000
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
  HideToast() {
    this.toast = this.toastController.dismiss();
  }

  listPlaces() {
    this.router.navigateByUrl('/places');
  }

  scanQR() {
    
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.router.navigateByUrl('/place/'+barcodeData.text);
     }).catch(err => {
         console.log('Error', err);
     });

  }

}
