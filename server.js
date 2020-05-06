const path = require("path")
const express = require("express")

const port = process.env.PORT || 5000

const app = express()

app.use(express.static(path.join(__dirname, "dist")))
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"))
})

app.listen(port, () => {
  console.log(`Server running at port: ${port}`)
})
