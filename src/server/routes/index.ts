import express from "express";
import path from 'path';

const router = express.Router();

router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/home.html'));
});

export default router;