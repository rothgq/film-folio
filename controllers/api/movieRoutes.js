const router = require('express').Router();
const { Movie, Genre } = require('../../models');

//for future use were we to add manually adding Movies to the database
//or having a manual search bar/account searching

router.get('/', async (req, res) => {
    await Movie.findAll({
    })
    .then(movieData => res.json(movieData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', async (req, res) => {
    await Movie.findOne({
        where: {
            id: req.params.id
        },
    })
    .then(movieData => res.json(movieData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;