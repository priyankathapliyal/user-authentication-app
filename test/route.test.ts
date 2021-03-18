import { SlowBuffer } from 'buffer';
import chai from 'chai';
import { assert, expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/index';

chai.use(chaiHttp)

describe("POST /login", () => {

    it("Should return status 200 as username & password are correct", async () => {
        let res = await chai
            .request(app)
            .post('/login')
            .send({ username: "mary", password: "passwordmary" })

        expect(res.status).to.equal(200)
        expect(res).to.have.cookie('connect.sid');
    });

    it("Should return status 401 and message `Incorrect Username and/or Password!` as username and password is wrong", async () => {
        let res = await chai
            .request(app)
            .post('/login')
            .send({ username: "john", password: "passwordmary" })

        expect(res.status).to.equal(401);
        expect(res.error.text).to.equal('Incorrect Username and/or Password!')
    })

    it("Should return status 401 and message `Incorrect Username and/or Password!` as username is not specified", async () => {
        let res = await chai
            .request(app)
            .post('/login')
            .send({ password: "passwordmary" })

        expect(res.status).to.equal(401);
        expect(res.error.text).to.equal('Please enter Username and Password!')
    })

    it("Should return status 401 and message `Incorrect Username and/or Password!` as password is not specified", async () => {
        let res = await chai
            .request(app)
            .post('/login')
            .send({ username: "mary" })

        expect(res.status).to.equal(401);
        expect(res.error.text).to.equal('Please enter Username and Password!')
    })

});



describe("GET /", () => {

    it("Should return status 200 and redirect to login page as session is not defined", async () => {
        let res = await chai
            .request(app)
            .get('/')

        expect(res.status).to.equal(200);
    });

    it("Should return status 200 and sessionid cookie is maintained across multiple request", async () => {
        let res = await chai
            .request(app)
            .post('/login')
            .send({ username: "mary", password: "passwordmary" })

        expect(res.status).to.equal(200)
        expect(res).to.have.cookie('connect.sid');

        let resGetApi = await chai
            .request(app)
            .get('/')

        expect(resGetApi.status).to.equal(200);
        expect(resGetApi).to.have.cookie('connect.sid');
    });


})



