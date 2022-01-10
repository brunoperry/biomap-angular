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
        const sitesRef = collection(this.firestore, table);
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

    async updateDataByID(table:string, data:any):Promise<any> {
        const noteDocRef = doc(this.firestore, `${table}/${data.id}`);
        return await updateDoc(noteDocRef, data);
    }
}