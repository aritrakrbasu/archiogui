import React, { useContext, useState, useEffect } from "react"
import { auth, db, storageRef } from "../../firebase"
import { doc, onSnapshot, query, where } from "firebase/firestore";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from "@firebase/auth"
import { collection, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function register(email, password, name, image) {
    return new Promise((resolve, reject) => {
      createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        updateProfile(user, {
          displayName: name,
        }).then((result)=>{
            console.log(result)
            if(image != null){
              const storage = ref(storageRef, "users/" + user.uid);
              uploadBytes(storage, image).then((res) => {
                getDownloadURL(storage).then(url => {
                  setDoc(doc(db, 'users', user.uid), {
                    displayName: name,
                    userId: user.uid,
                    email: email, 
                    profileImgURL: url
                  })
                  .catch((error) => reject("Error updating document !"))
                })
                .catch((error) => reject("Error in Getting Downloading URL"))
              })
              .catch((error) => reject("Error in Uploading Image"))
            } else {
              setDoc(doc(db, 'users', user.uid), {
                displayName: name,
                userId: user.uid,
                email: email, 
                profileImgURL: null
              }).catch((error) => reject("Error updating document !"))
            }
          })
          .then(()=>{
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
      const q = query(collection(db, "users"), where("email", "==", email));
      onSnapshot(q, (docs) => {
        console.log(docs)
        if(!docs.empty) {
          signInWithEmailAndPassword(auth, email, password).then(() => {
            resolve()
          }).catch(error => reject(error));
        } else {
          reject({message:"No registered user found with the given email"})
        }
      }, (error) => {
        reject({message: "Some error occured while logging in. Please try again."})
      })
    })
  }

  function logout() {
    sessionStorage.clear();  
    setCurrentUser()
    return auth.signOut()
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if(user && user.uid) {
            const q = doc(db, "users", user.uid)
            var unsub = onSnapshot(q, (docs) => {
                if(docs.exists()) {
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
    logout,
    currentUser
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}


