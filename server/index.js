const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const authRouter = require("./routes/auth.routes")
const productsRouter = require("./routes/product.routes")
const app = express()
const PORT = config.get('serverPort')
const cors = require('cors')

const corsOption = {
    credentials: true,
    origin: '*'
}

app.use(cors(corsOption))
app.use(express.json())
app.use("/api/auth", authRouter)
app.use("/api", productsRouter)

const start = async () => {
    try {
        await mongoose.connect(config.get("databaseUrl"), {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })

        app.listen(PORT, () => {
            console.log('Server started on port ', PORT)
        })
    } catch (e) {
        console.log(e)
    }
}

start()