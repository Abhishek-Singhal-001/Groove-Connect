import {Router } from 'express';    
import { checkAdmin, createAlbum, createSong, deleteAlbum, deleteSong } from '../controller/admin.controller.js';
import { protectRoute, requireAdmin } from '../middleware/auth.middleware.js';


const router =Router();

//slightly optimized code 
router.use(protectRoute,requireAdmin);
//before call below one we have to check the these two functions if one is true then call the next
//to check the user is admin or not for admin dashboard 

router.get("/check",checkAdmin);
router.post("/songs",createSong );
router.delete("/songs/:id",deleteSong);//.songs
router.post("/albums",createAlbum);
router.delete("/albums/:id",deleteAlbum);//.albums



  
export default router ;
