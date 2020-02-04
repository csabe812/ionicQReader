import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Place, PlaceService } from 'src/app/services/place.service';
import { ToastController } from '@ionic/angular';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place = {
    name: '',
    onetoten: 0
  }

  constructor(private activatedRoute: ActivatedRoute, private placeService: PlaceService
    , private toastCtr: ToastController, private router: Router) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.placeService.getPlace(id).subscribe(p => {
        this.place = p;
      });
    }
    else {
      this.showToast("Not a valid QR Code or ID");
      this.router.navigateByUrl('/places');
    }
  }

  addPlace() {
    this.placeService.addPlace(this.place).then(() => {
      this.router.navigateByUrl('/places');
      this.showToast('Place added');
    }, err => {
      this.showToast('There was a problem');
    });
  }

  deletePlace() {
    this.placeService.deletePlace(this.place.id).then(() => {
      this.router.navigateByUrl('/places');
      this.showToast('Place deleted');
    }, err => {
      this.showToast('There was a problem');
    });
  }

  updatePlace() {
    this.placeService.updatePlace(this.place).then(() => {
      this.router.navigateByUrl('/places');
      this.showToast('Place updated');
    }, err => {
      this.showToast('There was a problem');
    });
  }

  showToast(msg) {
    this.toastCtr.create({
      message: msg,
      duration: 2000,

    }).then(toast => toast.present());
  }

}
