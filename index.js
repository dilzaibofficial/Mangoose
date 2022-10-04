const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/e-comm')

const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
});

const saveInDb = async () => {
    let product = mongoose.model('products', productSchema)
    let data = new product({ name: "DIL5848" })
    return await data.save()
}


const updateInDb = async () => {
    const product = mongoose.model('products', productSchema)
    let data = await product.updateMany(
        { name: "Oppo F17" },
        { $set: { price: 300 } }
    )
    console.log(data)
}

const deleteInDb = async () => {
    const product = mongoose.model('products', productSchema)
    let data = await product.deleteMany(
        { name: "DIL5848" }
    )
    console.log(data)
}

const dataInDb = async () => {
    const product = mongoose.model('products', productSchema)
    let data = await product.find({name:"Oppo F17"})
    
    console.log(data)
}

// dataInDb()
// deleteInDb()
// updateInDb()
// saveInDb()
