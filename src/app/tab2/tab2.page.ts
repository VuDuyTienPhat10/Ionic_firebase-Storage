import { Component, ViewChild, ElementRef } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  downloadURL:string;
  productName:string;
  price:number;
  
  constructor(private storage: AngularFireStorage, private db: AngularFireDatabase,public alertController: AlertController) { }
  selectedFile;
  getFile($event) {
    this.selectedFile = $event.target.files;
    console.log(this.selectedFile);
    return this.selectedFile
  }
  phantram:number;
  completed:boolean;
  add() {
    this.reset_progress_bar();

    this.db.list('list_sp').push({ productName: this.productName,price:this.price,created_at:Date.now()}).then(snapshot => {
      if (this.selectedFile) {
        //đường dẫn hình ảnh trên storage:
        const filePath = `hinhanh/${snapshot.key}`;
        //tham chiếu đến file
        const fileRef = this.storage.ref(filePath); //dùng để lấy downloadURL;

        //upload file vào đường dẫn đã khai báo
        const task = this.storage.upload(filePath, this.selectedFile[0]);
        

        //theo dõi số phần trăm đã upload :
        task.percentageChanges().subscribe(data=>{
          this.phantram=data; console.log(this.phantram);
          // $('#teo').css({width:this.phantram+'%'})
         
          if(this.phantram==100){
            fileRef.getDownloadURL().subscribe(url => {
              this.downloadURL=url;
              this.db.list('list_sp').update(snapshot.key, { imgURL: url }).then(async() => {
                //ẩn thanh upload đi
                this.completed=true;
                //hiện thông báo đã xong
                const alert = await this.alertController.create({
                  message: 'Đã upload xong',
                  buttons: ['OK']
                });
                await alert.present();
                this.productName='';this.price=null;
              })
            })

          }
         
        
        })
        // task.snapshotChanges().pipe(
        //   finalize(() => {
           
        //   })
        // ).subscribe()
      }
    })
  }

  reset_progress_bar(){
    this.completed=false;
    $('#teo').css({width:0+"%"})
  }


}
