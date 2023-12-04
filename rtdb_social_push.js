import { getDatabase, push, ref } from '@firebase/database'
import { FirebaseError } from '@firebase/util'

const sendChatMessage = async () => {
    try {
        const db = getDatabase()
        const dbRef = ref(db, 'chat')
        await push(dbRef, {
            message: 'message',
        })
    } catch (e) {
        if (e instanceof FirebaseError) {
            console.log(e)
        }
    }
}