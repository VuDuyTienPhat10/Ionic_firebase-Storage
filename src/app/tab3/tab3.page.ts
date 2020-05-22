import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { finalize } from 'rxjs/operators';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  ngOnInit(){
    
  }
  tensp: string;

  downloadURL;

  constructor(private storage: AngularFireStorage, private db: AngularFireDatabase,
    public loadingController: LoadingController,public alertController:AlertController) { }
  selectedFile;
  getFile($event) {
    this.selectedFile = $event.target.files;
    console.log(this.selectedFile);
    return this.selectedFile
  }
  phantram;
  async add() {
    const loading = await this.loadingController.create({
      message: 'ĐANG XỬ LÍ...',
    });
    await loading.present();
    this.db.list('list_sp').push({ productName: this.tensp }).then(snapshot => {
      if (this.selectedFile) {
        const filePath = `hinhanh/${snapshot.key}`;

        const fileRef = this.storage.ref(filePath);
        const task = this.storage.upload(filePath, this.selectedFile[0]);
     
        // task.percentageChanges().subscribe(data=>{
        //   this.phantram=data;
        //   console.log(this.phantram)
        // })
        task.snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe(url => {
              this.downloadURL=url;
              this.db.list('list_sp').update(snapshot.key, { imgURL: url }).then(() => {
                console.log('xong');
                this.loadingController.dismiss().then(async()=>{
                  const alert = await this.alertController.create({
                    header: 'Đã thêm',
                
                    
                    buttons: ['OK']
                  });
              
                  await alert.present();
                });
                
              })
            })

          })
        ).subscribe()
      }
    })
  }
}
