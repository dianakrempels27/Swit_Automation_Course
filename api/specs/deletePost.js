const usersEndpoints = require("../helpers/endPoints");
const expect = require("chai").expect;
const moment = require("moment");
const { faker } = require('@faker-js/faker');

describe ("delete post by API request", () => {
    it("should be return status 200 after deleting a post by API", async () => {
        const loginUser = await usersEndpoints.login("diana.krempels1", "09Tirogo&");
        token = loginUser._body.token;
        let title = moment().unix();
        let description = faker.lorem.sentence();
        const body = {
            "image": {
                "0": {}
            },
            "title": title,
            "description": description,
            "content": "jkdjdn",
            "imageUrl": "/uploads/image-1699637426202-936072770.jpg"
        };
        const createPostByAPI = await usersEndpoints.createPost(`Bearer ${token}`, body);
        idPost = createPostByAPI._body._id;
        expect(createPostByAPI.statusCode).to.be.eql(200);
        expect(createPostByAPI._body.title).to.be.eql(title + "");
        expect(createPostByAPI._body.description).to.be.eql(description);
        const deletePost = await usersEndpoints.deletePost(`Bearer ${token}`, idPost);
        console.log(deletePost.statusCode);
        expect(deletePost.statusCode).to.be.eql(200);
        const getAllPosts = await usersEndpoints.getPosts(`Bearer ${token}`);
        const getPostIndex = getAllPosts._body.findIndex((element) => element._id === idPost);
        expect(getPostIndex).to.be.eql(-1);
        console.log(getPostIndex);
    })
})