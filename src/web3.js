import Web3 from "web3";
import contractData from "./contracts/VaccineTracking.json";

const contractAddress = "0xBb90A58ec219B45e6AB32f694Bf6c7d35ae0d2B3"; // Replace with your deployed contract address

let web3;
let contract;

async function initWeb3() {
    if (window.ethereum) {
        try {
            await window.ethereum.request({ method: "eth_requestAccounts" }); // Request wallet access
            web3 = new Web3(window.ethereum);
        } catch (error) {
            console.error("User denied account access", error);
        }
    } else if (window.web3) {
        web3 = new Web3(window.web3.currentProvider);
    } else {
        console.error("MetaMask not detected. Please install MetaMask.");
    }

    if (web3) {
        contract = new web3.eth.Contract(contractData.abi, contractAddress);
    }
}

initWeb3(); // Initialize Web3 when the file is loaded

export { web3, contract };
