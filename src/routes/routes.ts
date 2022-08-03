import { Router } from "express";
//import { allController, findIdController, createController, updateController, deleteController } from "../controller/controller";
import { db } from "../database/database";
export const route = Router();

route.get('/', async (req, res) =>{
    const snapshot = await db.get();
    const list = snapshot.docs.map((doc) => ({id:doc.id, ...doc.data()}))
    res.send(list)
});

route.post('/', async (req, res) => {
    const data = req.body;
    await db.add(data)
    res.send({message: 'Empresa adicionada'})
});

route.put('/', async (req, res) => {
    const id = req.body.id;
    delete req.body.id
    const data = req.body
    await db.doc(id).update(data)
    res.send({ message: 'Empresa atualizada'})
});

route.delete('/', async (req, res) => {
    const id = req.body.id;
    await db.doc(id).delete()
    res.send({ message: 'Empresa deletada'})
});