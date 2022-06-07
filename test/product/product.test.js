const chai = require('chai')
chai.use(require('chai-http'))
const { expect } = require('chai')
const { app } = require('../../app')

/**
 * @see https://github.com/chaijs/chai-http
 */
const request = chai.request(app).keepOpen()


//a collection of test cases that test a specific component
describe("Testing Get Product API without Query Parameter /product", () => {
  //test a function for a specific case
    it("it should return all products  without query param", async () => {
        const response =  await request.get(`/product`);
        const productResult = response.body;
        expect(response.status).to.have.equal(200);
        expect(productResult.length).to.have.equal(7);
    })

    it("it should return error if query parameter is different from allowed lists", async () => {
        const response =  await request.get(`/product?productt_idd=1`);
        const productResult = response.body;
        expect(response.status).to.have.equal(500);
        expect(productResult.error.message).contains('is invalid query parameter');
    })
})


//a collection of test cases that test a specific component
describe("Testing Get Product API with Query Parameter /product", () => {
    //test a function for a specific case
      it("it should return products after applying product_id filter /product?product_id=", async () => {
          const response =  await request.get(`/product?product_id=2`);
          const productResult = response.body;
          expect(response.status).to.have.equal(200);
          expect(productResult.length).to.have.equal(1);
      })
  
      it("it should return products after applying name filter /product?name=", async () => {
          const response =  await request.get(`/product?name=OnePlus 6T`);
          const productResult = response.body;
          expect(response.status).to.have.equal(200);
          expect(productResult.length).to.have.equal(1);
      })

      it("it should return products after applying price filter /product?price=", async () => {
        const response =  await request.get(`/product?price=1020`);
        const productResult = response.body;
        expect(response.status).to.have.equal(200);
        expect(productResult.length).to.have.equal(1);
    })

    it("it should return products after applying category_id filter /product?category_id=", async () => {
        const response =  await request.get(`/product?category_id=5`);
        const productResult = response.body;
        expect(response.status).to.have.equal(200);
        expect(productResult.length).to.have.equal(2);
    })

    it("it should return products after applying status_code filter /product?status_code=", async () => {
        const response =  await request.get(`/product?status_code=INACTIVE`);
        const productResult = response.body;
        expect(response.status).to.have.equal(200);
        expect(productResult.length).to.have.equal(7);
    })
  })


  //a collection of test cases that test a specific component
describe("Testing  Product State Transfer API ", () => {
    //test a function for a specific case
      it("it should update state from INACTIVE to DRAFT for listing_started action", async () => {
          const response =  await request.post(`/product/transfer_state`).send({
            product_id: 1,
            action: 'listing_started'
          })
          expect(response.status).to.have.equal(200);
          expect(response.text).contains('moved to status  -> DRAFT');
      })

      it("it should return error if invalid parameters are send in request body state", async () => {
        const response =  await request.post(`/product/transfer_state`).send({
          productt_id: 1,
          action: 'listing_started'
        })
        expect(response.status).to.have.equal(500);
    })

    it("it should return error if invalid actions are pushed", async () => {
        const response =  await request.post(`/product/transfer_state`).send({
          product_id: 1,
          action: 'listited'
        })
        expect(response.status).to.have.equal(500);
    })
     
  })