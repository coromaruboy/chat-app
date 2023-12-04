import { sendEmailVerification, createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { FirebaseError } from '@firebase/util'

const signUp = async () => {
    try {
        const auth = getAuth()
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        await sendEmailVerification(userCredential.user)
    } catch (e) {
        if (e instanceof FirebaseError) {
            console.log(e)
        }
    }
}