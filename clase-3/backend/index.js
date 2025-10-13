// file system -> sistema de archivos de node
import fs from "node:fs"
import http from "node:http"

const products = JSON.parse(fs.readFileSync("./products.json", "utf-8"))

// console.log(products.push({
//   id: 'e266b28e-21e4-48f4-bf5a-2f3f02c8e591',
//   name: 'Lámpara de baño',
//   description: 'Lámpara LED.',
//   category: 'Baño',
//   price: 2000,
//   stock: 1
// }))

// fs.writeFileSync("./products.json", JSON.stringify(products))

const callbackRequest = (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500")
  response.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH")
  response.setHeader("Content-Type", "application/json")

  const method = request.method
  const url = request.url

  if (method === "GET" && url === "/products") {
    response.end(JSON.stringify(products))
  } else {
    response.end(JSON.stringify({ error: "Resource not found" }))
  }
}

const server = http.createServer(callbackRequest)

// 0 / 65000
server.listen(1111)