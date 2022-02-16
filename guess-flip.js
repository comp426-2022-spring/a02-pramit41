import { flipACoin } from "./modules/coin.mjs";
import { createRequire } from "module"

const require = createRequire(import.meta.url)
const args = require('minimist')(process.argv.slice(2))
args['call']

if(args.call == null || (args.call !== "heads" && args.call !== "tails")){
    console.log("Error: no input.")
    console.log("Usage: node guess-flip --call=[heads|tails]")
} else {
    console.log(flipACoin(args.call))
}