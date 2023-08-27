import abi from "./contracts/Project.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Buy from "./components/Buy";
import Footer from "./components/Footer";
import Memos from "./components/Memos";
import { CssBaseline, ThemeProvider, Switch, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';


import "./App.css";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("None");
  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x8f0dc5a2a9810aa3dc74bf936064266bad4e06a4";
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;

        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });

          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });

          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          setAccount(account);
          setState({ provider, signer, contract });
        } else {
          alert("Please install metamask");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);

  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const handleDarkModeChange = () => {
    setDarkMode(!darkMode);
  };
  // console.log(state);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div style={{ textAlign: 'end', marginRight: '20px' }}>
        <Switch
          checked={darkMode}
          onChange={handleDarkModeChange}
          color="primary"
        />
        {darkMode ? 'Dark Mode' : 'Light Mode'}
      </div>
      <div style={{ height: "100%" }}>
        <div style={{ textAlign: 'center' }}>
          <Typography variant="h3">SuppEth</Typography>
        </div>
        <p
          class="text-muted lead "
          style={{ marginTop: "10px", marginLeft: "5px" }}
        >
          <small style={{ display: 'block', margin: '0 auto' }}>
            Connected Account - {account}
          </small>
        </p>
        <div className="container">
          <Buy state={state} />
          <Memos state={state} darkMode={darkMode} />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;