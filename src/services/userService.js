import { db } from "../components/firebase";
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc

} from "firebase/firestore";

const usersCollectionRef = collection(db, "users");
export class UserService {
    addUser = (newdata) => {
        return addDoc(usersCollectionRef, newdata);
        
    }

    updateUser = (id, updateddata) => {
        const docRef = doc(db, "users", id);
        return updateDoc(docRef, updateddata);

    }

    deleteUser = (id) => {
        const docRef = doc(db, "users", id);
        return deleteDoc(docRef);

    }

    getAllUsers = () => {
        return getDocs(usersCollectionRef);
    }

    getUser = (id) => {
        const docRef = doc(db, "users", id);
        return getDoc(docRef);
        
    }
  
}