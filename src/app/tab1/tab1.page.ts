import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  products:Observable<any>;
  constructor(public ds:DataService) {}

  ngOnInit(){
    this.products=this.ds.getProducts();
  }

}
