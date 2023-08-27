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
                    elevation={13}
                    className="memo-paper"
                    style={{
                        backgroundColor: darkMode ? '#3297a8' : '#ff884d',
                    }}
                >
                    <div style={{ padding: 10 }}>
                        <p><b>Name:</b> {memo.name}</p>
                        <p>{new Date(memo.timestamp * 1000).toLocaleString()}</p>
                    </div>
                    <div style={{ padding: 10 }}>
                        <p><b>Message: </b> {memo.message}</p>
                        <p>{memo.from}</p>
                    </div>
                </Paper>
            ))}
        </div>
    );
};

export default Memos;