const {ethers, Contract} = require('ethers');

const Account = '0x1a26f4Da20fA877CC18599660140318f34be6dE8';
const Privatekey = 'e85f531eadbc3f1b1d915bd69e4b47393f71d0750492cd79cdb642695af7f4c4';


const RPC = 'https://goerli.infura.io/v3/a4653f9706fc46f78d5c82d14687f3f1';
const contractAddress = '0x6f5DF070E6f94D23AF2dE80047632995E7AE98Fd';
const ABI = [{"inputs":[],"name":"getValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_val","type":"uint256"}],"name":"setValue","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]

const provider = new ethers.providers.JsonRpcProvider(
    RPC
)



const newwallet = new ethers.Wallet(Privatekey,provider)

async function Writescfile(){

    const contract = new ethers.Contract(
        contractAddress,
        ABI,
        newwallet
    )
    // const tx = await contract.setValue(Account,{
    //     value: ethers.utils.parseEther('0.08')
    // })

    const tx = await contract.setValue(ethers.utils.parseEther('0.08'))

    await tx.wait();
    console.log("success")
    console.log(tx)
}

Writescfile();