import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"
import { ProType } from "../types"

export const syncBothPro = async (userId: string, proUpdated: ProType) => {
  //chemin
  const docRef = doc(db, "users", userId)
  const docSnap = await getDoc(docRef)
  const existing = docSnap.data() || {}
  // nouvelle entrée
  const newDoc = {
    patients: [...existing.patients],
    listTests: [...existing.listTests],
    pro: proUpdated,
  }
  setDoc(docRef, newDoc) //chemin, nouvelle entrée en param
}

export const getPro = async (userId: string) => {
  //chemin
  const docRef = doc(db, "users", userId)

  const docSnapshot = await getDoc(docRef)
  if (docSnapshot.exists()) {
    const { pro } = docSnapshot.data()
    return pro
  }
}
