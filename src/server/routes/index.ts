import express from "express";
import path from 'path';
import login from "../controllers/loginController";
import authenticateUser from "../middlewares/authenticateMiddleware"

const router = express.Router();

router.get("/", authenticateUser, (req, res) => {
    res.redirect("/home");
});

router.get('/home', authenticateUser, (req, res) => {
    res.sendFile(path.join(__dirname, '../views/home.html'));
});

router.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, '../views/login.html'));
});

/**
 * @swagger
 * /login:
 *    post:
 *      summary: Creates a new user.
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: body
 *          name: user
 *          description: The user to authenticate.
 *          schema:
 *            type: object
 *            required:
 *             - userName
 *            properties:
 *              username:
 *                type: string
 *              password:
 *                type: string
 *      responses:
 *        201:
 *          description: Authenticated
 *        404:
 *          description: Invalid username and password
 */
router.post('/login', login);

export default router;