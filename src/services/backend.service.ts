import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Firestore, collection, collectionData, doc, docData, addDoc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';


@Injectable({providedIn: 'root'})
export class BackendService {

    constructor(private firestore: Firestore) {
    }

    getDataFrom(table:string, params:any={idField: 'id'}):Observable<any> {
        const siteRef = collection(this.firestore, table);
        return collectionData(siteRef, params) as Observable<any[]>;
    }

    getDataById(table:string, id:number, params:any={idField: 'id'}):Observable<any> {
        const siteDocRef = doc(this.firestore, `${table}/${id}`);
        return docData(siteDocRef, params) as Observable<any>;
    }

    async saveData(table:string, data:any, images:any=null):Promise<any> {
        const ref = data;

        if(data.mapImg) {
            const url = await this.uploadImages([data.mapImg]);
            data.mapImg = url;
        }

        if(data.media.length > 0) {
            const urls = await this.uploadImages(data.media);
            data.media = urls;
            console.log(urls);
        }
        const sitesRef = collection(this.firestore, table);
        return await addDoc(sitesRef, data);
    }
    async uploadImages(images:any[]):Promise<any> {
        
        const storage = getStorage();
        let urls:string[] = [];

        for (let i = 0; i < images.length; i++) {
            const img = images[i];
            const storageRef = ref(storage, `files/${Math.random()}${img.name}`);
            const uploadTask = await uploadBytes(storageRef, img);
            const u:string = await getDownloadURL(uploadTask.ref);

            console.log('url', u);
            urls.push(u);
        }

        // images.forEach(async img => {
        //     const storageRef = ref(storage, `files/${Math.random()}${img.name}`);
        //     const uploadTask = await uploadBytes(storageRef, img);
        //     const u:string = await getDownloadURL(uploadTask.ref);

        //     console.log('url', u);
        //     urls.push(u);
        // })
        
        console.log('done', urls);
        return urls;
    }

    async deleteDataByID(table:string, id:string):Promise<any> {
        const siteDocRef = doc(this.firestore, `${table}/${id}`);
        return await deleteDoc(siteDocRef);
    }

    async updateData(table:string, data:any):Promise<any> {
        const noteDocRef = doc(this.firestore, `${table}/${data.id}`);
        return await updateDoc(noteDocRef, data);
    }
}