import express from "express";
import path from 'path';
import login from "../controllers/login";
import authenticateUser from "../middlewares/authenticateMiddleware"

const router = express.Router();

router.get("/", authenticateUser, (req, res) => {
    res.redirect("/home");
});

router.get('/home',authenticateUser, (req, res) =>{
    res.sendFile(path.join(__dirname, '../views/home.html'));
});

router.get("/login", (req, res) =>{
    res.sendFile(path.join(__dirname, '../views/login.html'));
});

router.post('/login', login);

export default router;