const { User } = require('../models');

const userData = [
    {
        id: 1,
        name: "Anthony",
        password: "password",
    },
    {
        id: 2,
        name: "Kassandra",
        password: "password",
    },
    {
        id: 3,
        name: "Kandace",
        password: "password",
    },
    {
        id: 4,
        name: "Noah",
        password: "password",
    },
    {
        id: 5,
        name: "Amanda",
        password: "password",
    },
    {
        id: 6,
        name: "Gregory",
        password: "password",
    }
];

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUsers;