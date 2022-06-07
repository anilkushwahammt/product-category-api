const chai = require('chai')
chai.use(require('chai-http'))
const { expect } = require('chai')
const { app } = require('../../app')

/**
 * @see https://github.com/chaijs/chai-http
 */
const request = chai.request(app).keepOpen()


//a collection of test cases that test a specific component
describe("Testing Get Category API  without Query parameter /category", () => {
    //test a function for a specific case
    it("it should return all categories  without query param", async () => {
        const response =  await request.get(`/category`);
        const productResult = response.body;
        expect(response.status).to.have.equal(200);
        expect(productResult.length).to.have.equal(5);
    })

    it("it should return error if query parameter is different from allowed lists", async () => {
        const response =  await request.get(`/category?categoryy_idd=1`);
        const productResult = response.body;
        expect(response.status).to.have.equal(500);
        expect(productResult.error.message).contains('is invalid query parameter');
    })
})


//a collection of test cases that test a specific component
describe("Testing Get Category API with query parameters /category", () => {
    //test a function for a specific case
    it("it should return categories after applying category_id filter /category?category_id=", async () => {
        const response =  await request.get(`/category?category_id=3`);
        const productResult = response.body;
        expect(response.status).to.have.equal(200);
        expect(productResult.length).to.have.equal(1);
    })

    it("it should return categories after applying category_name filter /category?category_name=", async () => {
        const response =  await request.get(`/category?category_name=stationery`);
        const productResult = response.body;
        expect(response.status).to.have.equal(200);
        expect(productResult.length).to.have.equal(1);
    })

    it("it should return categories after applying parent_id filter /category?parent_id=1", async () => {
        const response =  await request.get(`/category?parent_id=1`);
        const productResult = response.body;
        expect(response.status).to.have.equal(200);
        expect(productResult.length).to.have.equal(2);
    })
})