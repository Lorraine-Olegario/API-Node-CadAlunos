const { Router } = require('express');
const AlunoController = require('../controllers/AlunoController.js');

const router = Router();

router.get('/alunos', AlunoController.all);
router.get('/alunos/:id', AlunoController.find);
router.post('/alunos', AlunoController.create);
router.put('/alunos/:id', AlunoController.edit);
router.delete('/alunos/:id', AlunoController.delete);

module.exports = router;