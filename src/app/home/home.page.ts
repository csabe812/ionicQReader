import { Component, NgModule } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { PlaceService } from '../services/place.service';


const options: BarcodeScannerOptions = {
  showFlipCameraButton: true,
  showTorchButton: true,
  torchOn: false,
  prompt: 'Scan it my friend',
  resultDisplayDuration: 0,
  disableSuccessBeep: true
};

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage {

  toast: any;

  

  constructor(private barcodeScanner: BarcodeScanner, private toastController: ToastController, private router: Router, private placeService: PlaceService) {}

  showToast(msg) {
    this.toast = this.toastController.create({
      message: msg,
      duration: 2000
    }).then((toastData) => {
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
    
    this.barcodeScanner.scan(options).then(barcodeData => {
      this.router.navigateByUrl('/place/'+barcodeData.text);
     }).catch(err => {
         console.log('Error', err);
     });

  }

  addTenPlace() {
    this.placeService.addTenPlaces();
  }

}
