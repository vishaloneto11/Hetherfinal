const {ethers} = require('ethers');


const RPC = 'https://goerli.infura.io/v3/a4653f9706fc46f78d5c82d14687f3f1';
const Account = '0x1a26f4Da20fA877CC18599660140318f34be6dE8';
const Account3 = '0xcd3B766CCDd6AE721141F452C550Ca635964ce71';
const Privatekey = 'e85f531eadbc3f1b1d915bd69e4b47393f71d0750492cd79cdb642695af7f4c4';


const provider = new ethers.providers.JsonRpcProvider(
    RPC
)

// here we get the address of privatekey by using this instance
const newwallet = new ethers.Wallet(Privatekey,provider)

// doing transaction after creating wallet





async function call(){
    const bal = await provider.getBalance(Account)
    console.log("Account1: "+ " " + ethers.utils.formatEther(bal));
    // here we see getbalnave of public account
    // to get the balance of private account we have create instance 
    console.log(await newwallet.getAddress())
    console.log("Account1"+ " " +  ethers.utils.formatEther(await newwallet.getBalance()));

    // transc
    const trans = newwallet.sendTransaction(
        {
        to:Account3,
        value: ethers.utils.parseEther('0.08')
    })
    ;(await trans).wait
    
    const acc3bal = await provider.getBalance(Account3)
    console.log("Account3: "+ " " + ethers.utils.formatEther(acc3bal));
    console.log("Account1"+ " " +  ethers.utils.formatEther(await newwallet.getBalance()));
    console.log(trans)
}
call();