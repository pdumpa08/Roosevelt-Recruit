import { auth, db } from '../firebaseconfig';
import { signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
        await signInWithPopup(auth, provider);
    } catch (error) {
        console.error("Error logging in: ", error);
    }
};

const handleGoogleSignup = async (userType) => {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        await setDoc(doc(db, "users", user.uid), {
            email: user.email,
            userType: userType
        });
    } catch (error) {
        console.error("Error signing up: ", error);
    }
};

const handleEmailSignup = async (email, password, userType) => {
    try {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        const user = result.user;
        await setDoc(doc(db, "users", user.uid), {
            email: user.email,
            userType: userType
        });
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