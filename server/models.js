
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/Cakes',{useNewUrlParser:true},(err)=>console.log(err?err:"db gucci"));
const CakeSchema = new mongoose.Schema({
    baker_name: {
        type: String,
        minlength: 2,        
    },
    img_url: {
        type: String,
        default: "https://cdn.qwertee.com/images/designs/thumbs/28008.jpg"
    },
    rating:[{
        comment:{
            type: String,
            default:""
        },
        rating:{
            type: Number,
            min:1,
            max:5,
            default:5
        }
    }]

},{timestamps:true})


module.exports = mongoose.model('Cake', CakeSchema);