const express = require("express")
const app = express()
const jwt = require ("jsonwebtoken")



const PORT = 3000

//middleware
app.use(express.json())

//url fixed
app.use("/products", require("./routes/products"))
app.use("/categories", require("./routes/categories"))
app.use("/users", require("./routes/users"))
app.use("/ordens", require("./routes/ordens"))




app.listen(PORT, ()=> console.log(`Server created successfully ${PORT}`))