const express = require('express');
const router = express.Router();

const MeController = require('../app/controllers/MeController');

// meController.index
// [GET] me/stored/courses
router.get('/stored/courses', MeController.storedCourses);
// [GET] me/trash/courses

router.get('/trash/courses', MeController.trashCourses);
// [GET] me
router.get('/', MeController.index);

module.exports = router;
