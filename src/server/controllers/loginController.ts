import { promises } from "dns";

// Username & password
const users = [
    {
        id: "MTN_user",
        password: "MTN281#^@*"
    },
    {
        id: "mary",
        password: "passwordmary"
    }
]


/**
 * @description 'login' function matches the user credentials and redirects to home page or throws an error.
 * @param {object} 'session'
 * @param {body} 'request body object'
 */

export default async function login({ body, session }: { body: any, session: any }, res: any) {

    const username = body.username;
    const password = body.password;

    if (username && password) {
        try {
            await validateUser(username, password);
            session.loggedin = true;
            session.username = username;
            res.status(200);
            res.redirect("/home");
        }
        catch {
            res.status(401).send('Incorrect Username and/or Password!')
        }
    } else
        res.status(401).send("Please enter Username and Password!");
}

/**
 * @description 'validateUser' checks that username and password matches or not.
 * @param {string}  'username' .
 * @param {string}  'password' .
 * @returns a promise if username & password matches else rejects.
 */

async function validateUser(username: string, password: string) {
    if (users.filter(user => user.id === username && user.password === password).length > 0)
        return Promise.resolve(true)
    else
        return Promise.reject(false)
}