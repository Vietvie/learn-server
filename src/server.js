import express from "express"
import configViewEngine from "./configs/viewEngine"
import { initWebRoute } from "./routes/web"
import { initApiRoute } from "./routes/api";
import bodyParser from "body-parser";

require('dotenv').config()

const app = express()
const port = process.env.PORT || 3030
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
configViewEngine(app)
initWebRoute(app)
initApiRoute(app)

// app.get('/', (req, res) => {
//   res.render('index.ejs')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})