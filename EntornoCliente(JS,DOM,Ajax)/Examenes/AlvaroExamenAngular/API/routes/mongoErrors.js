import express from 'express';
import { getErrorByDate, getErrors, insertError } from '../services/errors.service.js';

const router = express.Router();

router.get('/', async (req, res) => {
  res.status(200).json(await getErrors());
});

router.get('/:time', async (req, res) => {
  const time = req.params.time;

  const error = await getErrorByDate(time);

  if (error) {
    res.status(200).json(error);
    return;
  }

  res.status(404).send('Error not found');
});

router.post('/', async (req, res) => {
  const error = req.body;

  const newError = await insertError(error);
  if (newError) {
    res.json(error);
    return;
  }
  res.status(400).send('Failure while creating the error');
});

export default router;
