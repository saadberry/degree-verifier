import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import { useStorageUpload } from '@thirdweb-dev/react';
import axios from 'axios'
// import {contractABI} from "../abis/sigVerificationABI.js";

function Admin() {

const [provider, setProvider] = useState(null);
const [account, setAccount] = useState(null);
const [rollnumber, setRollnumber] = useState('');


  async function connectWallet() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const account = await provider.listAccounts();
      setProvider(provider);
      setAccount(account);
    } else {
      console.log("Please install MetaMask!");
    }
  }

  useEffect(() => {
    // Check if Metamask is already connected
    // const checkWallet = async () => {
    //   if (typeof window.ethereum !== 'undefined') {
    //     const provider = new ethers.providers.Web3Provider(window.ethereum);
    //     setProvider(provider);
    //     const signer = provider.getSigner();
    //     const account = await signer.getAddress();
    //     setAccount(account);
    //   }
    // };
    connectWallet();
  }, []);


//setting variables for file
const [file, setFile] = useState(null)
const {mutateAsync: upload } = useStorageUpload();

const uploadToIpfs = async () => {
  try {
    const uploadUrl = await upload({
      data: [file],
      options: {
        uploadWithGatewayUrl: true,
        uploadWithoutDirectory: true
      }
    });
    console.log(uploadUrl);

    const response = await axios.post('http://localhost:8000/verify', {
      rollnumber: rollnumber,
      url: uploadUrl
    });

    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

const handleFormSubmit = (event) => {
  event.preventDefault(); // Prevent default form submission

  uploadToIpfs(); // Call the uploadToIpfs function to handle the request
};

return (
    <div>
    {account && <p>Connected with account {account[0]}</p>}

    {/* form will update `url` and `isVerified` values once submitted */}
    <form onSubmit={handleFormSubmit}> 

    <div class="input-box">
      <label for="name">Student ID</label>
        <input type="text" 
        placeholder="(19k-1234)" 
        name="rollnumber" 
        required="" 
        value={rollnumber}
        onChange={(e) => setRollnumber(e.target.value)} />
    </div>

    {/* //upload degree */}
    <input type='file' onChange= {(e) => {
      if(e.target.files) {
        setFile(e.target.files[0]); 
      }
    }}/>
    <button onClick={uploadToIpfs}>Verify</button>
    </form>
    
  </div>
  );

}

export default Admin