import { useState, useEffect } from "react";
import { Paper } from '@mui/material';
import './Memos.css';
const Memos = ({ state, darkMode }) => {
    const [memos, setMemos] = useState([]);
    const { contract } = state;


    useEffect(() => {
        const memosMessage = async () => {
            const memos = await contract.getMemos();
            setMemos(memos);
        };
        contract && memosMessage();
    }, [contract]);

    return (
        <div className="memos-container">
            {memos.map((memo) => (
                <Paper
                    key={Math.random()}
                    elevation={10}
                    className="memo-paper"
                >
                    <div>
                        <p><b>Name:</b> {memo.name}</p>
                        <p>{new Date(memo.timestamp * 1000).toLocaleString()}</p>
                    </div>
                    <div>
                        <p><b>Message:</b> {memo.message}</p>
                        <p>{memo.from}</p>
                    </div>
                </Paper>
            ))}
        </div>
    );
};

export default Memos;