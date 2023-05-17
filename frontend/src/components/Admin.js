import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import { useStorageUpload } from '@thirdweb-dev/react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

function Admin() {
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);
  const [rollnumber, setRollnumber] = useState('');

  async function connectWallet() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const account = await provider.listAccounts();
      setProvider(provider);
      setAccount(account);
    } else {
      console.log('Please install MetaMask!');
    }
  }

  useEffect(() => {
    connectWallet();
  }, []);

  const [file, setFile] = useState(null);
  const { mutateAsync: upload } = useStorageUpload();

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
    event.preventDefault();
    uploadToIpfs();
  };

  return (
    <>
      {account == '0x4E3908F7109f57E4A31c2986a8aab5C3D0b5B592' ? (
        <div className="form-group">
          <h2>Connected with wallet: {account[0]}</h2>

          <form onSubmit={handleFormSubmit}>
            {/* <div className="input-box"> */}
            
    <div class="input-box">
      <label for="name">Student ID</label>
      
    </div>
              
              <input
                type="text"
                placeholder="(19k-1234)"
                name="rollnumber"
                required=""
                value={rollnumber}
                onChange={(e) => setRollnumber(e.target.value)}
              />
            
            <div class="input-box">
      <label for="name">Upload Degree</label>
      
    </div>
            <input
              type="file"
              onChange={(e) => {
                if (e.target.files) {
                  setFile(e.target.files[0]);
                }
              }}
            />
            <Button variant="contained" color="primary" onClick={uploadToIpfs}>
              Verify
            </Button>
          </form>
          <h3>
            <a href="/AddRecord">Add new record</a>
          </h3>
          <h3>
            <a href="/users">Get Verified Students</a>
          </h3>
        </div>
      ) : (
        <p>Authenticate with Metamask to access this page</p>
      )}
    </>
  );
}

export default Admin;
