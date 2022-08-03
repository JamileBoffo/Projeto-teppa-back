/*import { empresa } from "../interface/interface";
import * as admin from "firebase-admin";

const db = admin.firestore();

export const allController = async () => {
  return await db.collection('empresas').doc().get()
};

export const findIdController = async (id: string) => {
  const res = db.collection('empresas')
  return await res.doc(id).get()
};

export const createController = async (empresa: empresa) => {
  const res = await db.collection('empresas').doc().set(empresa)
};

export const updateController = async (id: string, empresa: empresa) => {
  return await db.collection('empresas').doc(id).update({empresa})
};

export const deleteController = async (id: string) => {
    return await db.collection('empresas').doc(id).delete()
};
*/