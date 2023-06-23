const { Router } = require('express');
const StudentController = require('../controllers/StudentController.js');

const router = Router();

router.get('/students', StudentController.all);
router.get('/students/:id', StudentController.find);
router.post('/students', StudentController.create);
router.put('/students/:id', StudentController.edit);
router.delete('/students/:id', StudentController.delete);

module.exports = router;