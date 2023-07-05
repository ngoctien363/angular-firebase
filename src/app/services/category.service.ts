import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { CollectionReference, DocumentData, collection } from 'firebase/firestore';
import { BehaviorSubject, Observable, concatAll, map, of } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private cat$ = new BehaviorSubject<Category[]>([]);
  private _cat$ = new Observable<Category[]>;
  private prodCategory:  CollectionReference<DocumentData>

  constructor( private fireStore: Firestore ) {
    this.prodCategory = collection(this.fireStore, 'category');
    this.loadCat();
   }
 
  async loadCat() {
    this._cat$ = collectionData(this.prodCategory, {
      idField: 'id'
    }) as Observable<Category[]>;
    this._cat$.pipe(
      map((val) => of(val)),
      concatAll()
    ).subscribe(it => {
      this.cat$.next(it);      
    })
  }
  get category$() {
    return this.cat$.asObservable();
  }
}
