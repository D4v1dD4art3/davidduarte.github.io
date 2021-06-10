const { Router } = require('express');

const router = Router();

const projectsCtrl = require('../controllers/projects.controller.js');

router.get('/', projectsCtrl.getProjects);
router.get('/:id', projectsCtrl.getProject);
router.post('/', projectsCtrl.createProjects);
router.put('/:id', projectsCtrl.updateProjects);
router.delete('/:id', projectsCtrl.deleteProjects);

module.exports = router;
