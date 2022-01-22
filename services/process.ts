import sharp from 'sharp';
import express from 'express';
import path from 'path';

const process_ =  async (srcPath: string, destPath: string, width: number, height: number):Promise<void> => {
        await sharp(srcPath).withMetadata().resize(width, height).toFile(destPath);
}

export function validate_width_height (width: number, height: number) {
    if(height < 1 || width < 1 || !width || !height) {
        return false;
    }
    return true;
}

export const process = (req: express.Request, res: express.Response) => {
    
    try {

        const imgName = req.query.filename;
        const height = Number(req.query.height);
        const width = Number(req.query.width);
        console.log(imgName,width,height);
        
        if(!validate_width_height(width, height)) {
            throw new Error('width or height must written and be greater than 0');
        }

        const srcPath = path.join(__dirname, '../../assets/full/' + imgName + '.jpg');
        const destPath = path.join(__dirname,'../../assets/thumb/' + imgName + '.jpg');
      
        process_(srcPath, destPath,width,height)
        .then(() => {
            res.status(200).sendFile(destPath);
        })
        .catch((e) => {
            console.log(e);
            res.status(404).send('Image you requested doesn\'t exist');
        });

    } catch (err) {
        console.log('invalid Input');
        res.status(400).send("<h4>There is an input error Please Enter query parameters like this format =><h2> ?filename={image}&width={width > 0  }&height={height > 0}</h2></h4>");
    }
};

