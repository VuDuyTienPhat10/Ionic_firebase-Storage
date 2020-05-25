import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import * as _ from 'lodash'
import * as firebase from 'firebase';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  products: Observable<any>;
  constructor(public ds: DataService) { }
  taolao;
  storage
  ngOnInit() {
     this.storage = firebase.storage();
    this.ds.getProducts().subscribe(data => {
      this.products = data;
    })
  }

  SapXepTheoNgay(direction: string) {
    this.products = _.orderBy(this.products, 'date', direction)
  }
  SapXepTheoGia(direction: string) {
    this.products = _.orderBy(this.products, 'price', direction)
  }

  onDelete(key) {
    console.log(key);
    this.ds.deleteProduct(key).then(() => {
      var storageRef = this.storage.ref();
      var img_muon_delete = storageRef.child(`hinhanh/${key}`);
      img_muon_delete.delete().then(() => {
        alert('đã xóa hình ảnh')
      })
    })

  }




}
