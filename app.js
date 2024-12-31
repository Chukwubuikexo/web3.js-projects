//https://young-necessary-frog.quiknode.pro/71dbad039aef5362832638220c70dd1c806a7245


const {ethers, providers} = require("ethers");



const readline = require('readline');
const var1 = readline.createInterface({

    input : process.stdin,
    output: process.stdout
});



async function main(){
    var1.question(`Enter the ETH node URL: `, async(node)=>{
        try{
            const provider = new ethers.providers.JsonRpcProvider(node);
            const blockNumber = await provider.getBlockNumber();
            const block =  await provider.getBlock(blockNumber);
            console.log(`Block Number:  , ${block['number']}`);
            console.log(`Timestamp: , ${block['timestamp']}`);
            console.log(`Miner: , ${block['miner']}`);   
        }catch(error){
            console.error(`Error: `, error.message);
        }finally{
            var1.cloe();
        }
    });
}
main()