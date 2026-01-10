import http,{IncomingMessage,Server,ServerResponse} from "http"
import config from "./config"
import { routes, RouteHandler } from "./helpers/RouteHandler"
import "./routes"

const server: Server = http.createServer((req:IncomingMessage ,res: ServerResponse) =>
    {
const method =req.method?.toUpperCase() || ""
const path = req.url || ""
const methodMap = routes.get(method)
const handler:RouteHandler | undefined = methodMap?.get(path)

if(handler){
handler(req,res)
}else{
    res.writeHead(404,{"content-type": "appliction/json"})
    res.end(JSON.stringify({
        sucess:false,
        message:"Route not found",
        path:path}))}})

server.listen(config.port ,() =>{
    console.log(`server is running on port  ${config.port}`)
})