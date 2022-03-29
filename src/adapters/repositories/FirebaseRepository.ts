import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth, Auth } from 'firebase/auth'
import firebaseConfig from "./FireBaseConfig";
import { getFirestore, Firestore  } from "firebase/firestore";

export class FirebaseRepository {
    auth: Auth;
    app: FirebaseApp;
    db: Firestore;
    collectionName: string = '';

    constructor () {
        this.app = initializeApp(firebaseConfig);
        this.auth = getAuth(this.app)
        this.db = getFirestore();
    }
}