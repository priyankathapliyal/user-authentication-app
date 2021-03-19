/**
 * @description middleware authenticateUser to check if session exists user gets logged in and else redirected to login page.
 * @param {object} 'session' object.
 */

export default function authenticateUser({ session }: { session: any }, res: any, next: any) {
    if (session.loggedin) {
        next();
    }
    else {
        res.status(401).send({ status: 401, message: "User not authenticated." });
    }
}
