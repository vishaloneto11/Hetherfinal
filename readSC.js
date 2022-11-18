const {ethers} = require('ethers');

const RPC = 'https://goerli.infura.io/v3/a4653f9706fc46f78d5c82d14687f3f1';

const contractAddress = '0x6f5DF070E6f94D23AF2dE80047632995E7AE98Fd';
const ABI = [{"inputs":[],"name":"getValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_val","type":"uint256"}],"name":"setValue","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]
const provider = new ethers.providers.JsonRpcProvider(
    RPC
)


async function Readscfile(){

    const contract = new ethers.Contract(
        contractAddress,
        ABI,
        provider
    )
    console.log(ethers.utils.formatEther(await contract.getValue()))
}


Readscfile();