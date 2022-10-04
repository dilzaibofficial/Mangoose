const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/e-comm')

const productSchema = mongoose.Schema({
    name: String
});

const saveInDb = async () => {
    let product = mongoose.model('products', productSchema)
    let data = new product({ name: "DIL5848" })
    return await data.save()
}


const updateInDb=async()=>{
    const product=mongoose.model('products',productSchema)
    let data=await product.updateOne(
        {name:"Oppo F17"},
        {$set:{price:300}}
    )
    
}

updateInDb()
