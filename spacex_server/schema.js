const axios = require('axios');
const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList } = require('graphql');

//Launch Type
const LaunchType = new GraphQLObjectType({
    name : 'Launch',
    fields: () => ({
        flight_number: { type: GraphQLInt }, 
        mission_name: { type: GraphQLString }, 
        launch_year: { type: GraphQLString }, 
        launch_date_local: { type: GraphQLString }, 
        launch_swuccess: { type: GraphQLBoolean }, 
        rocket: { type: RocketType }, 
    })
});

//Rocket Type
const RocketType = new GraphQLObjectType({
    name : 'Rocket',
    fields: () => ({
        rocket_id : { type: GraphQLString },
        rocket_name: { type: GraphQLString },
        rocket_year: { type: GraphQLString }
    })

});

//Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        launches: {
            type: new GraphQLList(LaunchType),
            resolve(parent, args) {
                return axios.get('https://api.spacexdata.com/v3/launches')
            }
        }
    }
})

