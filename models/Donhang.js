const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Tao model

const donHangSchema = new Schema({
    itemCode: {
        type:String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    ngayNhan: {
        type: Date
    },
    ngayXuat: {
        type: Date
    }
})

module.exports = mongoose.model('DonHang', donHangSchema)