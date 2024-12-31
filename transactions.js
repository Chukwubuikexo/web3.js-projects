//https://young-necessary-frog.quiknode.pro/71dbad039aef5362832638220c70dd1c806a7245


const {ethers, providers} = require("ethers")
const node = "https://young-necessary-frog.quiknode.pro/71dbad039aef5362832638220c70dd1c806a7245"


const provider = new ethers.providers.JsonRpcProvider(node)

async function main(){
    const blockNumber = await provider.getBlockNumber()
    console.log(blockNumber)
    const block =  await provider.getBlock(blockNumber)
    const transinfo = await provider.getTransaction("0xf40fa3c9a3854b806f87d089fcddb57ee260a9bc883afe61497be5238bdb7834")
    console.log(transinfo)
    console.log(ethers.utils.formatEther(transinfo.value))
}
main()