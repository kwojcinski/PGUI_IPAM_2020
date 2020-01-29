import * as firebase from "firebase";
import firebase_config from "../config/firebase_config";

firebase.initializeApp(firebase_config);

export default firebase.database();