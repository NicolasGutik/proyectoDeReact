import {collection, getDocs, getDoc, doc} from 'firebase/firestore'
import * as firebase from 'firebase/app' 
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
apiKey: "AIzaSyDUZ_FNSGGjWGYYOVYPM7LvBvAEPBbkDUs",
authDomain: "gemstore-23513.firebaseapp.com",
projectId: "gemstore-23513",
storageBucket: "gemstore-23513.appspot.com",
messagingSenderId: "219525589309",
appId: "1:219525589309:web:505f35873cfa1eb591fd54",
measurementId: "G-3S92M82V4W"
};

const app = firebase.initializeApp(firebaseConfig);  
export const db = getFirestore(app)  

export const getgema = (idgemas) =>{
    return new Promise ((resolve, reject) => {         
    getDoc(doc(db, 'Gemas' , idgemas)).then((querySnapshot) => {             
        const gemas = { id: querySnapshot.id, ...querySnapshot.data() }             
        resolve(gemas)
        console.log(gemas)             
    }).catch((error) => {                 
        reject('Error buscando gemas', error)             
    })     
}) 
}


export const getgemas = () =>{     
    return new Promise ((resolve, reject) => {         
        getDocs(collection(db, 'Gemas')).then((querySnapshot) =>{             
            const items = querySnapshot.docs.map(doc=> {                 
                return { id: doc.id, ...doc.data()}             
            })             
            resolve(items)             
        }).catch((error) =>{                 
            reject('Error buscando los items '+ error)             
        })     
    }) 
}