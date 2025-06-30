import {Album} from "../models/album.model.js";

//find all the albums 
//and call the next if error 
export const getAllAlbums=async (req,res,next)=>{
    try{
        const albums =await Album.find();
        res.status(200).json(albums);

    }catch(error){
        next(error);


}};

//populate- fetch the album with its songs from 
// song table becaue we dont have the song info we just have id of the songs 

export const getAlbumById=async (req,res,next)=>{
    try {
        const {albumId} = req.params;
        const album =await Album.findById(albumId).populate("songs");
        if(!album){
            return res.status(404).json({message:"Album not found"});
        }
            res.status(200).json(album);
    } catch (error) {
        next(error);
        
    }
};