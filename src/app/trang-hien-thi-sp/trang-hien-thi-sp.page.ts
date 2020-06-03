import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-trang-hien-thi-sp',
  templateUrl: './trang-hien-thi-sp.page.html',
  styleUrls: ['./trang-hien-thi-sp.page.scss'],
})
export class TrangHienThiSpPage implements OnInit {

  constructor(private db:AngularFireDatabase) { }
  listsp;
  ngOnInit() {
    this.db.list(`danhsach_sp`).valueChanges().subscribe(data=>{
      this.listsp=data;
      console.log('list sp đây nè',this.listsp);
    })
  }

}
