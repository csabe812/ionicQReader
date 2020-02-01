import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Place, PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.page.html',
  styleUrls: ['./place-list.page.scss'],
})
export class PlaceListPage implements OnInit {

  private places : Observable<Place[]>;
  constructor(private placeService: PlaceService) { }

  ngOnInit() {
    this.places = this.placeService.getPlaces();
  }

}
