import {Router } from 'express';
import { getAllSongs, getFeaturedSongs, getMadeForYou, getTrendingSongs } from '../controller/song.controller.js';
const router =Router();

router.get('/',getAllSongs);
router.get("/featured",getFeaturedSongs);
router.get("/trending",getTrendingSongs);
router.get("/made-for-you",getMadeForYou)




  
export default router ;