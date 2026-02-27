import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"

export const syncBothPro = async (userId, proUpdated) => {
  //chemin
  const docRef = doc(db, "users", userId)
  const docSnap = await getDoc(docRef)
  const existing = docSnap.data() || {}
  // nouvelle entrée
  const newDoc = {
    patients: [...existing.patients],
    pro: proUpdated,
  }
  setDoc(docRef, newDoc) //chemin, nouvelle entrée en param
}

export const getPro = async (userId) => {
  //chemin
  const docRef = doc(db, "users", userId)

  const docSnapshot = await getDoc(docRef)
  if (docSnapshot.exists()) {
    const { pro } = docSnapshot.data()
    return pro
  }
}
