var express = require('express');
var router = express.Router();

router.get('/*', function(req, res) {
    const onThree = req.query.onThree || 'fizz';
    const onFive = req.query.onFive || 'buzz';
    const onBoth = req.query.onBoth || 'fizzbuzz';
    const count = isNaN(req.query.count) ? 100 : Number(req.query.count);

    console.log(count, req.query.count, isNaN(req.query.count));

    res.send([...Array(count)].map((_, i) => {
        const number = i + 1;

        if (number % 3 === 0) {
            if (number % 5 === 0) {
                return onBoth;
            } else {
                return onThree;
            }
        }

        if (number % 5 === 0) {
            return onFive;
        }

        return number;
    }));
});

module.exports = router;
