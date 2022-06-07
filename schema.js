const graphql = require('graphql')
const {categoryStore,productStore} = require('./src/db');

const {
    GraphQLString,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList
} = graphql

const ProductType = new GraphQLObjectType({
    name: 'product',
    fields: () => ({
        product_id: { type: GraphQLInt },
        name: { type: GraphQLString },
        price: { type: GraphQLInt },
        category_id: { type: GraphQLInt },
        status_code: { type: GraphQLString }
    })
})

const CategoryType = new GraphQLObjectType({
    name: 'category',
    fields: () => ({
        category_id: { type: GraphQLInt },
        category_name: { type: GraphQLString },
        parent_id: { type: GraphQLInt }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        data: {
            type: GraphQLString,
            resolve (parentValue, args) {
                return 'Hello, Graphql!'
            }
        },
        product: {
            type: GraphQLList(ProductType),
            resolve (parentValue, args) {
                return productStore
            }
        },
        category: {
            type: GraphQLList(CategoryType),
            resolve (parentValue, args) {
                return categoryStore
            }
        }
    }
})


module.exports = new GraphQLSchema({
    query: RootQuery
})