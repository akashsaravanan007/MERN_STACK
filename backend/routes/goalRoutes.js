const express = require('express');
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController');


// router.get('/', (req,res) => {
//     res.status(200).json({message: 'get goals'});
// })

// router.get('/', getGoals)

// router.post('/', (req,res) => {
//     res.status(200).json({message: 'set goal'});
// })

// router.post('/', setGoal)


// router.put('/:id', (req,res) => {
//     res.status(200).json({message: `Update goal ${req.params.id}`});
// })


// router.put('/:id', updateGoal)

// router.delete('/:id', (req,res) => {
//     res.status(200).json({message: `Delete goal ${req.params.id}`});
// })

// router.delete('/:id', deleteGoal)


let {protect} = require('../middleware/authMiddleware');

router.route('/').get(protect, getGoals).post(protect, setGoal)
router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)

module.exports = router