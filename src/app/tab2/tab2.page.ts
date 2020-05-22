import { Component, ViewChild, ElementRef } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  tensp: string;
  downloadURL:string;

  constructor(private storage: AngularFireStorage, private db: AngularFireDatabase) { }
  selectedFile;
  getFile($event) {
    this.selectedFile = $event.target.files;
    console.log(this.selectedFile);
    return this.selectedFile
  }
  phantram;
  add() {
    this.db.list('list_sp').push({ productName: this.tensp }).then(snapshot => {
      if (this.selectedFile) {
        const filePath = `hinhanh/${snapshot.key}`;

        const fileRef = this.storage.ref(filePath);
        const task = this.storage.upload(filePath, this.selectedFile[0]);
     
        task.percentageChanges().subscribe(data=>{
          this.phantram=data;
          console.log(this.phantram)
          // $('#teo').width(this.phantram+'%');
          $('#teo').css({width:this.phantram+'%'})
        })
        task.snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe(url => {
              this.downloadURL=url;
              this.db.list('list_sp').update(snapshot.key, { imgURL: url }).then(() => console.log('xong'))
            })

          })
        ).subscribe()
      }
    })
  }


}
