//라우팅 설정
const express = require('express');
const router = express.Router();
const ctrl = require('./user.ctrl');

router.get('/hello', function (req, res) {
  res.send('Hello World');
});

router.get('/', ctrl.index);
router.get('/:id', ctrl.show);
router.delete('/:id', ctrl.destroy);
router.post('/', ctrl.create);
router.put('/:id', ctrl.update);

module.exports = router;