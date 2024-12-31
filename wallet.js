//https://young-necessary-frog.quiknode.pro/71dbad039aef5362832638220c70dd1c806a7245


const {ethers, providers} = require("ethers")
const node = "https://young-necessary-frog.quiknode.pro/71dbad039aef5362832638220c70dd1c806a7245"


const provider = new ethers.providers.JsonRpcProvider(node)

async function main(){
    
    const wallet = ethers.Wallet.createRandom()
    console.log(wallet.address)
    console.log(wallet.mnemonic)
    //console.log(wallet.privateKey)
    console.log('----------')
    //console.log(wallet._signingKey())
    //console.log(wallet._mnemonic())

}
main()