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

        if(data.mapImg) {
            const url = await this.uploadImages([data.mapImg]);
            data.mapImg = url;
        }
        const sitesRef = collection(this.firestore, table);

        console.log(data);
        
        return await addDoc(sitesRef, data);
    }
    async uploadImages(images:any[]):Promise<any> {
        
        const storage = getStorage();
        const storageRef = ref(storage, `files/${Math.random()}${images[0].name}`);
        const uploadTask = await uploadBytes(storageRef, images[0])
        return await getDownloadURL(uploadTask.ref);
    }

    async deleteDataByID(table:string, id:string):Promise<any> {
        const siteDocRef = doc(this.firestore, `${table}/${id}`);
        return await deleteDoc(siteDocRef);
    }

    async updateData(table:string, data:any):Promise<any> {
        const noteDocRef = doc(this.firestore, `${table}/${data.id}`);

        console.log(noteDocRef, data);
        
        return await updateDoc(noteDocRef, data);
    }
}