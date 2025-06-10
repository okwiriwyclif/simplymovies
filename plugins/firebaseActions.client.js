//firebase actions plugin
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDatabase, ref as dbRef, set, get, remove } from "firebase/database";

export default defineNuxtPlugin((nuxtApp) => {
  const auth = nuxtApp.$firebaseAuth || getAuth();
  const firestore = nuxtApp.$firestore || getFirestore();
  const storage = nuxtApp.$storage || getStorage();
  const database = nuxtApp.$firestore || getDatabase();

  // Provide Firebase actions to the Nuxt app
  nuxtApp.provide("firebaseActions", {
    auth: {
      signUp: (email, password) =>
        createUserWithEmailAndPassword(auth, email, password),
      signIn: (email, password) =>
        signInWithEmailAndPassword(auth, email, password),
      signOut: () => signOut(auth),
    },
    firestore: {
      addDocument: (collectionName, data) =>
        addDoc(collection(firestore, collectionName), data),
      getDocuments: async (collectionName) => {
        const querySnapshot = await getDocs(
          collection(firestore, collectionName)
        );
        return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      },
      updateDocument: (collectionName, docId, data) =>
        updateDoc(doc(firestore, collectionName, docId), data),
      deleteDocument: (collectionName, docId) =>
        deleteDoc(doc(firestore, collectionName, docId)),
    },
    storage: {
      uploadFile: (path, file) => {
        const storageRef = ref(storage, path);
        return uploadBytes(storageRef, file);
      },
      getFileURL: (path) => getDownloadURL(ref(storage, path)),
    },
    database: {
      setData: (path, data) => set(dbRef(database, path), data),
      getData: (path) => get(dbRef(database, path)),
      removeData: (path) => remove(dbRef(database, path)),
    },
  });
});
