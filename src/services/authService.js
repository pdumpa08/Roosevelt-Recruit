import { auth } from '../firebaseconfig';
import { signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
        await signInWithPopup(auth, provider);
    } catch (error) {
        console.error("Error logging in: ", error);
    }
};

const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    try {
        await signInWithPopup(auth, provider);
    } catch (error) {
        console.error("Error signing up: ", error);
    }
};

const handleEmailSignup = async (email, password) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error("Error signing up: ", error);
    }
};

const handleEmailLogin = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error("Error logging in: ", error);
    }
};

const handleLogout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error("Error logging out: ", error);
    }
};

export { handleGoogleLogin, handleGoogleSignup, handleEmailSignup, handleEmailLogin, handleLogout };