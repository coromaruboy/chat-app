import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const App = () => {
    useEffect(() => {
        return onAuthStateChanged(getAuth(), (user) => {
            setUser(user)
        })
    }, [])

    return null;
}