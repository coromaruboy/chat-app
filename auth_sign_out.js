import { getAuth, signOut } from "firebase/auth";
import { FirebaseError } from "@firebase/util";

const signOut = async () => {
    try {
        const auth = getAuth();
        await signOut(auth);
    } catch (e) {
        if (e instanceof FirebaseError) {
            console.log(e);
        }
    }
}