import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { FirebaseError } from '@firebase/util'

const signIn = async () => {
    try {
        const auth = getAuth()
        await signInWithEmailAndPassword(auth, email, password)
    } catch (e) {
        if (e instanceof FirebaseError) {
            console.log(e)
        }
    }
}