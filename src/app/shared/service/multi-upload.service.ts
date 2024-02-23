import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class MultiUploadService {
    public task$: AngularFireUploadTask;

    // Progress monitoring
    public percentage$: Observable<number>;
  
    public snapshot: Observable<any>;
  
    // Download URL
    public downloadURL: Observable<string>;
  
    constructor(public storage: AngularFireStorage) {}
    putStorageItem(item) {
        let firebase_images=[];
         // Client-side validation example
      if (item.type.split('/')[0] !== 'image') {
        console.error('unsupported file type :( ');
        throw new Error('upload failed, unsupported file type');
      }

      // The storage path
      const path = `product-images/${new Date().getTime()}_${item.name}`;
        // the return value will be a Promise
        return this.storage.upload(path,item)
        .then((snapshot) => {
            snapshot.ref.getDownloadURL().then();
            
            return  snapshot.ref.getDownloadURL().then();
           
        }).catch((error) => {
          console.log('One failed:', item, error.message)
        });
      }
}