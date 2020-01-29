import { Component, NgModule } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@NgModule({
  imports: [QRScanner]
})

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  toast: any;

  constructor(private qrScanner: QRScanner, private toastController: ToastController, private router: Router) {

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
    // Optionally request the permission early
    let ionApp = document.getElementsByTagName('ion-app')[0];
    ionApp.style.display = 'none';
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted
          // start scanning
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);
            this.showToast(text);
            let idd = text;
            this.router.navigateByUrl('/place/'+idd);
            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
            ionApp.style.display = 'block';
          });

        } else if (status.denied) {
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => console.log('Error is', e));
  }

}
