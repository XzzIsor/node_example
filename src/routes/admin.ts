import express from 'express';
import path from 'path';

const router = express.Router();

interface IProducts {
    title: string; 
}

let products: IProducts[] = []


router.get('/add-product', (_,res) => { 
    res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
})



router.post('/add-product', (req, res)=>{
    products.push({title: req.body.title });    
    console.log(products); 
    
   res.redirect('/');
    
});

export default router;