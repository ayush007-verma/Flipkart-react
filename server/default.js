import { products } from './Constants/data.js'
import Product from './model/productSchema.js'
const DefaultData = async () => {
    try {
        await Product.insertMany(products);
        console.log('Data imported into the db')
    }
    catch(err){
        console.log('error while inserting defalut data from atlas db in DefaultData default.js' ,err.message)
    }

}

export default DefaultData

