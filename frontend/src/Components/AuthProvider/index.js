import React, { useContext, useState, useEffect } from "react"
import { auth, db } from "../../firebase"
import { doc, onSnapshot } from "firebase/firestore";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from "@firebase/auth"
import { collection, setDoc } from "firebase/firestore";

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function register(email, password, name) {
    return new Promise((resolve, reject) => {
      createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        updateProfile(user, {
          displayName: name,
        }).then((result)=>{
            const userDocRef = setDoc(doc(db, 'users', user.uid), {
                displayName: name,
                userId: user.uid,
                email: email
            })
          }).then(()=>{
            resolve()
          })
          .catch(error => reject("error creating profile"));
        })
        .catch(error => reject(error));
      })
    }

// user login
function login(email, password) {
    return new Promise((resolve, reject) => {
      db.collection("users").where("email","==",email).onSnapshot((docs)=>{
        if(!docs.empty)
        {
          docs.forEach(doc=>{
            if(doc.exists)
            {
                if(doc.data().isCollege === undefined && doc.data().isHr === undefined) 
                {
                  auth.signInWithEmailAndPassword(email, password).then(() => {
                    resolve()
                  })
                  .catch(error => reject(error));
                }
                else
                {
                  reject({message:"Not registered as an user"})
                }
            }
            else
            {
              reject({message:"no such account exists"})
            }
            })
        }
        else
        {
          reject({message:"no such account exists"})
        }
      })
    })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if(user && user.uid) {
            const q = doc(db, "users", user.uid)
            var unsub = onSnapshot(q, (docs) => {
                if(!docs.empty) {
                    setCurrentUser(docs.data())
                    setLoading(false)
                }
            }, (error) => {
                console.log(error)
            })
            return unsub
        } else {
            setLoading(false)
        }
    })

    return unsubscribe
  }, [])



  const value = {
    register,
    login,
    currentUser
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}


