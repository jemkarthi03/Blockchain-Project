import React, { useState } from "react";
import { web3, contract } from "../web3";

const VaccineTracker = () => {
    const [batchId, setBatchId] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [batchIdVerify, setBatchIdVerify] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(""); // ✅ Status message for user feedback

    // ✅ Register a new batch
    const registerBatch = async () => {
        if (!web3 || !contract) {
            setStatus("❌ Web3 is not initialized. Ensure MetaMask is installed.");
            return;
        }

        try {
            const accounts = await web3.eth.getAccounts();

            // 🛑 Validate input fields
            if (!batchId.trim() || !manufacturer.trim()) {
                alert("⚠️ Please enter both Batch ID and Manufacturer.");
                return;
            }

            const productionDate = Math.floor(Date.now() / 1000);
            const expiryDate = productionDate + 31536000; // 1 year from now

            console.log("📦 Registering batch...", { batchId, manufacturer, productionDate, expiryDate });

            await contract.methods.registerBatch(batchId, manufacturer, productionDate, expiryDate).send({
                from: accounts[0],
                gas: 500000, // Manually setting gas limit
                gasPrice: web3.utils.toWei("0", "gwei") // ✅ Ensure zero gas price is correctly formatted
            });

            setStatus(`✅ Batch ${batchId} registered successfully!`);
            setBatchId(""); // Reset input fields
            setManufacturer("");
        } catch (error) {
            console.error("🚨 Error registering batch:", error);
            setStatus("🚨 Error registering batch. Check console for details.");
        }
    };

    // ✅ Verify an existing batch
    const verifyBatch = async () => {
        if (!contract) {
            setMessage("❌ Contract not initialized. Refresh and try again.");
            return;
        }

        if (!batchIdVerify.trim()) {
            alert("⚠️ Please enter a Batch ID to verify.");
            return;
        }

        try {
            console.log("🔍 Verifying batch:", batchIdVerify);
            const isValid = await contract.methods.verifyBatch(batchIdVerify).call();
            setMessage(`Batch Valid: ${isValid ? "✅ Yes" : "❌ No"}`);
        } catch (error) {
            console.error("🚨 Error verifying batch:", error);
            setMessage("🚨 Error verifying batch. Check console for details.");
        }
    };

    return (
        <div>
            <h2>Register a Vaccine Batch</h2>
            <input type="text" placeholder="Batch ID" value={batchId} onChange={(e) => setBatchId(e.target.value)} />
            <input type="text" placeholder="Manufacturer" value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} />
            <button onClick={registerBatch}>Register Batch</button>

            <h2>Verify a Vaccine Batch</h2>
            <input type="text" placeholder="Batch ID to verify" value={batchIdVerify} onChange={(e) => setBatchIdVerify(e.target.value)} />
            <button onClick={verifyBatch}>Verify Batch</button>

            {/* ✅ Display status and messages */}
            {status && <p>{status}</p>}
            {message && <p>{message}</p>}
        </div>
    );
};

export default VaccineTracker;
