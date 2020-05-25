import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private db:AngularFireDatabase) { }

  getProducts():Observable<any>{
    return this.db.list(`list_sp`).snapshotChanges()
    .pipe(map(actions=>{
      let arr=actions.map(action=>{
        var obj:Object=action.payload.val();
        var key=action.payload.key;
        return {key,...obj};
      });
      return arr;
    }));
  }

  deleteProduct(key){
    return this.db.list('list_sp').remove(key);
  }
}
