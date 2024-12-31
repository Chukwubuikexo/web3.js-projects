//https://young-necessary-frog.quiknode.pro/71dbad039aef5362832638220c70dd1c806a7245


const {ethers, providers} = require("ethers")
const node = "https://young-necessary-frog.quiknode.pro/71dbad039aef5362832638220c70dd1c806a7245"


const provider = new ethers.providers.JsonRpcProvider(node)
const private = ///sender private key
const receiver = //receiver address

const wallet = new ethers.Wallet(private, provider)
const amttosend ='0.000002'


const tx = {
    to: "", // sender address
    value: ethers.utils.parseEther(amttosend)
}
async function main(){
    
    const balanceamt = await provider.getBalance('') //sender address
    console.log(ethers.utils.formatEther(balanceamt))


   // wallet.sendTransaction(tx)
    //.then((txobj) => {
      //  console.log('txHash', txobj.hash)

    //})

// Ethereum Request for Comment 20 - ERC20
//Characteristics
// Interoperability
//Divisibility
//Transparency
//Stanardization

}
main()