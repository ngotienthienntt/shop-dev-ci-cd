const express = require('express');
const router = express.Router();

router.get('/checkstatus', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok'
    })
})


router.get('/api/users', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok',
        metadata: [
            {   
                name: "thienngo",
                age: 25
            },
            {   
                name: "messi",
                age: 38
            },
        ]
    })
})

module.exports = router;