import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    age: {type: Number, required: true, min:18, max: 60},
    fees: {type:mongoose.Decimal128, required: true, validate:(v)=>v>=5000.5},
    
})

const userModel = mongoose.model('user', userSchema);

export default userModel