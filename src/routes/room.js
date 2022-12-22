const express = require('express');
const multer = require('multer');
const { roomPage, sendMessage, attachedFile } = require('./controllers/roomController');
const { authRequired } = require('./midleware/authRequired');
const { newMessageValidation} = require('./midleware/newMassageValidation')

const upload = multer({ storage: multer.memoryStorage() });
const router = express.Router();

const { asyncWrapper } = require('../helpers/asyncWrapper');

router.get(
  '/lobby/:roomId',
  authRequired,
  asyncWrapper(roomPage),
);

router.post(
  '/lobby/:roomId',
  upload.single('file'),
  authRequired,
  newMessageValidation,
  asyncWrapper(sendMessage),
);

router.get(
  '/files/:fileId',
  authRequired,
  asyncWrapper(attachedFile),
);

module.exports = router;
