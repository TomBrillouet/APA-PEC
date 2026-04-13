import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"
import { ListTestsType } from "../types"

export const syncBothListTests = async (
  userId: string,
  listTestsUpdated: ListTestsType,
) => {
  //chemin
  const docRef = doc(db, "users", userId)
  const docSnap = await getDoc(docRef)
  const existing = docSnap.data() || {}
  // nouvelle entrée
  const newDoc = {
    patients: [...existing.patients],
    pro: { ...existing.pro },
    listTests: listTestsUpdated,
  }
  setDoc(docRef, newDoc) //chemin, nouvelle entrée en param
}

export const getListTests = async (userId: string) => {
  //chemin
  const docRef = doc(db, "users", userId)

  const docSnapshot = await getDoc(docRef)
  if (docSnapshot.exists()) {
    const { listTests } = docSnapshot.data()
    return listTests
  }
}
