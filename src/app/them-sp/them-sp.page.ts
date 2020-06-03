import { Component, OnInit } from "@angular/core";
import { AngularFireStorage } from "@angular/fire/storage";
import { AngularFireDatabase } from "@angular/fire/database";
import { AlertController } from '@ionic/angular';

@Component({
  selector: "app-them-sp",
  templateUrl: "./them-sp.page.html",
  styleUrls: ["./them-sp.page.scss"],
})
export class ThemSPPage implements OnInit {
  productName: string;
  price: number;
  phantram: number;
  downloadURL: string;
  constructor(
    private storage: AngularFireStorage,
    private db: AngularFireDatabase,
    private alertController:AlertController
  ) {}
  selectedFile; //file đc chọn;
  completed;
  ngOnInit() {}
  getFile(file) {
    this.selectedFile = file;
    return this.selectedFile
  }
  add() {
 

    this.db.list('danhsach_sp')
    .push({ productName: this.productName,price:this.price,created_at:Date.now()})
    .then(snapshot => {
      //nếu chưa chọn file thì k cho upload:
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
         
          if(this.phantram==100){
            fileRef.getDownloadURL().subscribe(url => {
              this.downloadURL=url;
              this.db.list('danhsach_sp').update(snapshot.key, { imgURL: url }).then(async() => {
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
}
