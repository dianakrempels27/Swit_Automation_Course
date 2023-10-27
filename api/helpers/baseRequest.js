'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

class BaseRequest {

    //GET method
    async get(url, route, headers) {
        const result = await handleErrors(chai.request(url)
            .get(route)
            .set(headers));
        return result;
    }
//POST method
//PUT method
//DELETE method
}

function handleErrors(promise) {
return promise.catch((err) => {
    if (err.response) return err.response;
    throw err;
});
}

module.exports = BaseRequest;