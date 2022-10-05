// // const mongoose = require('mongoose')

// // mongoose.connect('mongodb://localhost:27017/e-comm')

// // const productSchema = mongoose.Schema({
// //     name: String,
// //     price: Number,
// //     brand: String,
// //     category: String
// // });

// // const saveInDb = async () => {
// //     let product = mongoose.model('products', productSchema)
// //     let data = new product({ name: "DIL5848" })
// //     return await data.save()
// // }


// // const updateInDb = async () => {
// //     const product = mongoose.model('products', productSchema)
// //     let data = await product.updateMany(
// //         { name: "Oppo F17" },
// //         { $set: { price: 300 } }
// //     )
// //     console.log(data)
// // }

// // const deleteInDb = async () => {
// //     const product = mongoose.model('products', productSchema)
// //     let data = await product.deleteMany(
// //         { name: "DIL5848" }
// //     )
// //     console.log(data)
// // }

// // const dataInDb = async () => {
// //     const product = mongoose.model('products', productSchema)
// //     let data = await product.find({name:"Oppo F17"})
    
// //     console.log(data)
// // }

// // // dataInDb()
// // // deleteInDb()
// // // updateInDb()
// // // saveInDb()






// // ***********************************






// // const express = require('express')
// // require('./config')
// // const product = require('./product')
// // const app = express()

// // app.use(express.json())

// // app.post('/create', async (req, resp) => {
// //     let data = new product(req.body)
// //     let result = await data.save()
// //     resp.send(data)
// // })

// // app.get('/read', async (req, resp) => {
// //     let data = await product.find()
// //     data = await data
// //     resp.send(data)
// // })


// // app.put('/update/:name', async (req, resp) => {
// //     let data = await product.updateMany(
// //         req.params, { $set: req.body }
// //     )
// //     console.log(req.params)
// //     resp.send("done")
// // })


// // app.delete('/delete/:name', async (req, resp) => {
// //     let data = await product.deleteMany(req.params)
// //     if (data.acknowledged) {
// //         console.log("Data Is Deleted")
// //         resp.send(data.acknowledged)
// //     }
// //     console.log(data.deletedCount)
// //     resp.send(data.deletedCount)
// // })

// // app.post('*', (req, resp) => {
// //     resp.send("Page Not Found >> Error404")
// // })

// // app.listen(5000)


// ****************************
// Search API




// require('./config')
// const product=require('./product')
// const express=require('express')
// const { response } = require('express')
// const app=express()

// app.use(express.json())

// app.get('/search/:key',async(req,resp)=>{
//     let data=await product.find(
//         {
//             "$or":[
//                 {brand:{$regex:req.params.key}},
//                 {name:{$regex:req.params.key}},
//                 {category:{$regex:req.params.key}},
//             ]
            
//         }
//     ) 
//     resp.send(data)
// })



// app.listen(4500)
