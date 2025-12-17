// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword,getAuth,signInWithEmailAndPassword,signOut } from "firebase/auth";
import { addDoc,collection,getFirestore } from "firebase/firestore";
import { toast } from 'react-toastify';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDC7uoTduZawvRMdzcSVReISrVXlUFPaFM",
  authDomain: "netflixclone-9d381.firebaseapp.com",
  projectId: "netflixclone-9d381",
  storageBucket: "netflixclone-9d381.firebasestorage.app",
  messagingSenderId: "954907776774",
  appId: "1:954907776774:web:3e497b675097ef38697087",
  measurementId: "G-GEEHJ6H0XR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth =getAuth(app);
const db=getFirestore(app);
const Signup=async(name,email,password)=>{
    try{
        const res=await createUserWithEmailAndPassword(auth,email,password);
        const user=res.user;
        await addDoc(collection(db,'user'),{ 
        uid:user.uid,
        name,
        authProvider:'local',
        email,    
    });
    }catch (error){
        console.log(error);
        toast.error(error.code.split("/")[1].split("-").join(" "))
    }
}

const login = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    console.log("LOGIN SUCCESS:", res.user); // ✅ works
  } catch (error) {
    console.log("LOGIN ERROR:", error.code, error.message);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const logout=async()=>{
    signOut(auth);
}

export {auth,db,login,Signup,logout};
