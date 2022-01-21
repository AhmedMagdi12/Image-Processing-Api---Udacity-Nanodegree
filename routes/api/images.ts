import express from 'express';

import { process } from '../../services/process';

const router = express.Router();

router.get('/',  process);

export default router;

