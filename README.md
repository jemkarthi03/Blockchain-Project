The Vaccine Tracking System is a blockchain-based web application that ensures the secure, transparent, and tamper-proof tracking of vaccine batches from manufacturers to end-users. Built using React for the frontend and Ethereum smart contracts for the backend, this system leverages MetaMask for user authentication and Ganache for local blockchain deployment. The primary goal is to prevent counterfeit vaccines by providing real-time tracking and verification using smart contracts.

🚀 Step-by-Step Procedure to Run the Vaccine Tracking Project
Follow these steps to set up, compile, and run your Vaccine Tracking System using React, Truffle, Ganache, and MetaMask.

🔹 Step 1: Install Required Software
Before running the project, make sure you have the following installed:
✅ Node.js (for running React and installing dependencies)
✅ Truffle (for compiling and deploying smart contracts)
✅ Ganache (for a local blockchain environment)
✅ MetaMask (for interacting with the blockchain)

Install globally if not installed:


npm install -g truffle
npm install -g ganache
🔹 Step 2: Clone or Create the Project
1️⃣ Clone the project (if using GitHub)


git clone https://github.com/your-repo/vaccine-tracking.git
cd vaccine-tracking
OR
1️⃣ Manually create a project


npx create-react-app vaccine-tracking
cd vaccine-tracking
🔹 Step 3: Install Dependencies
Run this inside the project folder:


npm install
Also, install Web3 and dotenv for blockchain interaction:


npm install web3 dotenv
🔹 Step 4: Start Ganache (Blockchain Network)
1️⃣ Open a new terminal and run:


npx ganache --networkId 1337 --gasLimit 6721975 --gasPrice 0
💡 If port 8545 is already in use, close any previous Ganache instances or change the port:


npx ganache --port 7545 --networkId 1337
🔹 Step 5: Compile and Deploy Smart Contracts
1️⃣ Inside the project folder, run:


truffle compile
truffle migrate --reset --network development
If network mismatch occurs, make sure Truffle config matches Ganache Network ID (1337 or 5777).

🔹 Step 6: Connect MetaMask to Ganache
1️⃣ Open MetaMask
2️⃣ Click Settings → Networks → Add a new network
3️⃣ Enter the following details:

Network Name: Ganache Localhost
RPC URL: http://127.0.0.1:8545
Chain ID: 1337 or 5777 (check your Ganache)
Currency Symbol: ETH
4️⃣ Save & Switch to the new network.
🔹 Step 7: Run the React Frontend

npm start
This will open http://localhost:3000/ in your browser.

🔹 Step 8: Register & Verify Vaccine Batches
1️⃣ Register a Batch

Enter Batch ID & Manufacturer
Click Register (MetaMask will ask for confirmation)
2️⃣ Verify a Batch

Enter the Batch ID to check if it's registered on the blockchain
