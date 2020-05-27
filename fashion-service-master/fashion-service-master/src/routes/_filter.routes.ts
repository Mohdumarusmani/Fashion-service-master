import {Router, Request, Response} from 'express';
import {ProductModel} from 'models/index';
import {Product} from 'types/index'
import {createMessage,createError} from 'utils/index'

export const Filters = (router: Router) => {
    router.post('/filter1',(req: Request, res: Response) => {
        const key = req.body.key
        const value = req.body.value

        ProductModel.find({}).where(key).gt(value)
        .then((data: Product[]) => {
            res.json(createMessage(200,"list of products",data)).status(200)
        })
        .catch((err) => {
            console.log(err)
            res.json(createError(500,err)).status(500)
        }) 
    })

    router.post('/filter2',(req: Request, res: Response) => {
        const key = req.body.key
        const value = req.body.value

        ProductModel.find({}).where(key).equals(value)
        .then((data: Product[]) => {
            res.json(createMessage(200,"list of products",data)).status(200)
        })
        .catch((err) => {
            console.log(err)
            res.json(createError(500,err)).status(500)
        }) 
    })

    router.post('/filter3',(req: Request, res: Response) => {
        const key = req.body.key
        const value = req.body.value

        ProductModel.find({}).where(key).lt(value)
        .then((data: Product[]) => {
            res.json(createMessage(200,"list of products",data)).status(200)
        })
        .catch((err) => {
            console.log(err)
            res.json(createError(500,err)).status(500)
        }) 
    })


    router.post('/filter4',(req: Request, res: Response) => {
        const key = req.body.key

        ProductModel.find({}).where(key).limit(30)
        .then((data: Product[]) => {
            res.json(createMessage(200,"list of products",data)).status(200)
        })
        .catch((err) => {
            console.log(err)
            res.json(createError(500,err)).status(500)
        }) 
    })
}