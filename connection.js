//https://young-necessary-frog.quiknode.pro/71dbad039aef5362832638220c70dd1c806a7245


const {ethers, providers} = require("ethers")
const node = "https://young-necessary-frog.quiknode.pro/71dbad039aef5362832638220c70dd1c806a7245"


const provider = new ethers.providers.JsonRpcProvider(node)

async function main(){
    const blockNumber = await provider.getBlockNumber()
    console.log(blockNumber)
    const block =  await provider.getBlock(blockNumber)
    console.log(block)
    //console.log(block["number"])
    //console.log(block["timestamp"])
    //console.log(block['miner'])


}
main()