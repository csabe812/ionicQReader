import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { QRScanner } from '@ionic-native/qr-scanner/ngx';

import { AngularFireModule } from '@angular/fire'
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule, FirestoreSettingsToken, AngularFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    QRScanner,
    {provide:FirestoreSettingsToken, useValue:{}},
    AngularFirestore
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
