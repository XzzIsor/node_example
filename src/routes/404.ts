import express from 'express';
import path from "path";

const router = express.Router();


router.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '..', 'views', '404.html'));
});

export default router;