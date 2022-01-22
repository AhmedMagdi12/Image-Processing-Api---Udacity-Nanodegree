import {  validate_width_height, process_ } from '../services/process';
import supertest from 'supertest';
import app from '../app';
import path from 'path';


// validate_width_height
describe('test width and height', () => {
    it('return false if width or height rejected, must written and be smaller than 1', () => {    
        expect(validate_width_height(100,-300)).toBe(false);

    });
    it('return true if width or height must written acceppted, are be greater than 1', () => {    
        expect(validate_width_height(100,300)).toBe(true);

    });
});    


// test process_ function
describe('test process_',  () => {
    const srcPath = path.join(__dirname, '../../assets/full/' + 'palmtunnel' + '.jpg');
    const destPath = path.join(__dirname,'../../assets/thumb/' + 'palmtunnel' + 200 + 200 +'.jpg');
    it('it should pass correctly if path is incorrect',  () => {    
        expect(async () =>  await process_(srcPath,destPath,200,200)).not.toThrowError();
    });
});    


// test endpoint
const request = supertest(app);
describe('Test endpoint responses', () => {
    it('test the api endpoint', async () => {
        const url = '/api/images/?filename=palmtunnel&width=300&height=300'
        const response = await request.get(url);
        expect(response.status).toBe(200);
    })
    it('throw an error with 404 status code if image not found', async () => {
        const url = '/api/images/?filename=hhhhhhhhhh&width=300&height=300'
        const response = await request.get(url);
        expect(response.status).toBe(404);
    })
    it('throw an error with 400 status code if bad input or width or height incorrect', async () => {
        const url = '/api/images/?filename=palmtunnel&width=-200&height=0'
        const response = await request.get(url);
        expect(response.status).toBe(400);
    })
});
