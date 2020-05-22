import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private db:AngularFireDatabase) { }

  getProducts():Observable<any>{
    return this.db.list(`list_sp`).valueChanges();
  }
}
