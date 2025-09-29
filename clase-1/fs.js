// file system
import fs from "node:fs"

fs.writeFileSync("./data.json", JSON.stringify([{ data: 2 }]))