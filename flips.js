import { coinFlips} from "./modules/coin.mjs";

 const args = (process.argv.slice(2))
if(args.length < 1){
    console.log(coinFlips(1))
} else { 
    let number = ""
    for(let i =9; i<args[0].length; i++){
        number+= args[0][i]
    }
  console.log(coinFlips(number)) 
} 
