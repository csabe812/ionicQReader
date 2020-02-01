import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';

export interface Place {
  id?: string,
  name: string,
  onetoten: number
}

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private places: Observable<Place[]>;
  private placeCollection: AngularFirestoreCollection<Place>;
  constructor(private afs: AngularFirestore) {
    this.placeCollection = this.afs.collection<Place>('places');
    this.places = this.placeCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getPlaces(): Observable<Place[]> {
    return this.places;
  }

  getPlace(id: string): Observable<Place> {
    return this.placeCollection.doc<Place>(id).valueChanges().pipe(
      take(1),
      map(place => {
        place.id = id;
        return place;
      })
    )
  }

  addPlace(place: Place): Promise<DocumentReference> {
    return this.placeCollection.add(place);
  }

  updatePlace(place: Place): Promise<void> {
    return this.placeCollection.doc(place.id).update({ name: place.name, onetoten: place.onetoten });
  }

  deletePlace(id: string): Promise<void> {
    return this.placeCollection.doc(id).delete();
  }

  /**
   * This method generates 1000 places filled with string.empty and 0
   */
  addTenPlaces() : Promise<void> {
    for(var i = 0; i < 1000; i++) {
      let place: Place = { name : '', onetoten: 0 };
      this.placeCollection.add(place);
    }
    return;
  }
  
}
