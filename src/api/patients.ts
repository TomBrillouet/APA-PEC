import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"
import { PatientsType } from "../types"

export const syncBothPatients = async (
  userId: string,
  patientsUpdated: PatientsType,
) => {
  //chemin
  const docRef = doc(db, "users", userId)
  const docSnap = await getDoc(docRef)
  const existing = docSnap.data() || {}
  // nouvelle entrée
  const newDoc = {
    pro: { ...existing.pro },
    listTests: [...existing.listTests],
    patients: patientsUpdated,
  }
  setDoc(docRef, newDoc) //chemin, nouvelle entrée en param
}

export const getPatients = async (userId: string) => {
  //chemin
  const docRef = doc(db, "users", userId)

  const docSnapshot = await getDoc(docRef)
  if (docSnapshot.exists()) {
    const { patients } = docSnapshot.data()
    return patients
  }
}
