import express from "express";
import { getItemDetail, getSearchItems } from "../controllers/itemController.js";

const router = express.Router();

//router.get('/', getItemDetail)

router.get("/items", getSearchItems )

router.get('/items/:id', getItemDetail)


export default router;