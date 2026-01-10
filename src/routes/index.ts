import addRoutes from "../helpers/RouteHandler"
import sendJson from "../helpers/sendJson"

addRoutes("GET","/" ,(req,res) => {
    sendJson(res,200,{
            message: "Hellow from node js with typescript",
            path:req.url
        })

})

addRoutes("GET","/api" ,(req,res) => {
    sendJson(res,200,{
            message: "health statis check",
            path:req.url
        })

})

