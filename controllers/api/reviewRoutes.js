const router = require('express').Router();
const { Review } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/movie/', withAuth, async (req, res) => {
    try {
        const newReview = await Review.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newReview);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/movie/:id', withAuth, async (req, res) => {
    const updateReview = await Review.update(
        {
            reviewText: req.body.reviewText,
        },
        {
            where: {
                id: req.params.id,
            },
        }
    );
    res.json(updateReview);
    });

router.delete('/movie/:id', withAuth, async (req, res) => {
    try {
        const reviewData = await Review.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!reviewData) {
            res.status(404).json({ message: 'No movie review found.' });
            return;
        }

        res.status(200).json(reviewData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;