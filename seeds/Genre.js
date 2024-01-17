const { Genre } = require('../models');

const genreData = [
    {
        id: 1,
        name: "Action",
    },
    {  
        id: 2,
        name: "Comedy",
    }, 
    {
        id: 3,
        name: "Drama",
    }, 
    {
        id: 4,
        name: "Horror",
    }, 
    {
        id: 5,
        name: "Romance",
    }, 
    {
        id: 6,
        name: "Thriller",
    }, 
    {
        id: 7,
        name: "Sci-Fi",
    },
];

const seedGenre = () => Genre.bulkCreate(genreData);

module.exports = seedGenre;

// async () => { await sequelize.sync({ force: false }); await }
