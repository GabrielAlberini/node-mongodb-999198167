// operative system
import os from "node:os"

console.log("Sistema operivo:", os.type())
console.log("Versión:", os.release())
console.log("Arquitectura:", os.arch())
console.log("Memoria libre (mb):", os.freemem() / 1024 / 1024)