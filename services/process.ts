import sharp from 'sharp';     
import express from 'express';
// import {promises as fsPromises} from 'fs';
import path from 'path';

export const process = (req:express.Request, res:express.Response) => {    

    const imgName = req.query.img;
    const height = Number(req.query.height);
    const width = Number(req.query.width); 
    
    const srcPath = path.join(__dirname,'../../assets/full/'+imgName+'.jpg');
    const destPath = path.join(__dirname,'../../assets/thumb/'+imgName+'.jpg');

    const process = async () => {
        await sharp(srcPath)
        .withMetadata()
        .resize(width,height)
        .toFile(destPath);
    }
        process()
        .then(() => {
            res.sendFile(destPath);
        })
        .catch((e) =>console.log(e))
}











    // const imagee = async () => {
    //     try {
    //         const myFile = await fsPromises.readFile(imgPath);
    //         console.log(myFile);
    //         return myFile || null;    
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }
    // const image = imagee();    
