export declare function createUserWithEmailAndPassword(auth: Auth, email: string, password: string): Promise<UserCredential>;

export declare interface UserCredential {
    /**
     * The user Authenticated by this credential
     */
    user: User;
    /**
     * The provider which was used to authentivate the user
     */
    providerId: string | null;
    /**
     * The type of operation which was used to authentivate the user (such as sign-in or link)
     */
    operationType: typeof OperationType[keyof typeof OperationType];
}

export declare function sendEmailVerification(user: User, actionCodeSettings?: ActionCodeSettings | null): Promise<void>;

export declare function signInWithEmailAndPassword(auth: Auth, email: string, password: string): Promise<UserCredential>;

export declare function onAuthStateChanged(auth: Auth, nextOrObserver: NextOrObserver<User>, error?: ErrorFn | null, completed?: CompleteFn | null): Unsubscribe;

export declare function signOut(auth: Auth): Promise<void>;