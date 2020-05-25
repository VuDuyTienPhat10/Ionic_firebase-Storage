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
  productName: string;

  downloadURL;
  price:number;


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
      spinner:'crescent'
    });
    await loading.present();
    this.db.list('list_sp').push({ productName: this.productName,price: this.price,date:Date.now()}).then(snapshot => {
      if (this.selectedFile) {
        const filePath = `hinhanh/${snapshot.key}`;

        const fileRef = this.storage.ref(filePath);
        const task = this.storage.upload(filePath, this.selectedFile[0]);
     
        task.percentageChanges().subscribe(data=>{
          this.phantram=data;
          if(this.phantram==100){
            this.loadingController.dismiss().then(async()=>{
              const alert = await this.alertController.create({
                header: 'Đã thêm',  
                buttons: ['OK']
              });
              await alert.present();
            });
            fileRef.getDownloadURL().subscribe(url => {
              this.downloadURL=url;
              this.db.list('list_sp').update(snapshot.key, { imgURL: url }).then(() => {
                console.log('da update vao db dia chỉ hình ảnh xong');               
              })
            })               
          }
          console.log(this.phantram);
          
          
        })
        // task.snapshotChanges().pipe(
        //   finalize(() => {
        //     console.log('finalize')
         

        //   })
        // ).subscribe(data=>console.log(`data nè`,data));
        
      }
    })
  }
}
