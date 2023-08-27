import React, { useState } from "react";
import { ethers } from "ethers";
import { TextField, Button } from '@mui/material';
import './Buy.css';

const Buy = ({ state }) => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const buyMeCoffe = async (event) => {
        event.preventDefault();
        const { contract } = state;
        const amount = { value: ethers.utils.parseEther("0.00001") };

        try {
            const transaction = await contract.buyMeCoffe(name, message, amount);
            await transaction.wait();
            console.log("Thanks for your support!");
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="buy-container">
            <form onSubmit={buyMeCoffe}>
                <TextField
                    label="Name"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    margin="normal"
                />
                <TextField
                    label="Message"
                    fullWidth
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    margin="normal"
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={!state.contract}
                >
                    Pay
                </Button>
            </form>
        </div>
    );
};

export default Buy;
