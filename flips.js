import { coinFlips, countFlips} from "./modules/coin.mjs";
import { createRequire } from "module"

const require = createRequire(import.meta.url)
const args = require('minimist')(process.argv.slice(2))
args['number']

if(args.number == null || args.number == ""){
    console.log(coinFlips(1))
    console.log(countFlips(coinFlips(1)))
} else { 
  console.log(coinFlips(args.number)) 
  console.log(countFlips(coinFlips(args.number)))
}


