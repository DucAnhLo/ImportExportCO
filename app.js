const express = require('express')
const app = express()
const connectDB = require('./config/db')
const { engine } = require('express-handlebars')

app.use(express.json())

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

connectDB()

//Load Model
const DonHang = require('./models/Donhang')


const PORT = 5000;

app.listen(PORT, () => console.log(`Server khoi dong tai port ${PORT}`))

app.get('/', (req, res) => res.render('index'))

app.get('/fetch/:itemCode',(req, res)=> {
    fetchItemCode = req.params.itemCode
    DonHang.find(({itemCode:fetchItemCode}), (err, val) => {
        res.send(val)
    })
})
