// import React, { useState } from 'react';
// // import { create as ipfsClient } from 'ipfs-http-client';
// import { create as ipfsClient } from 'kubo-rpc-client';

// const ipfs = ipfsClient({ host: 'localhost', port: '5001', protocol: 'http' });
// const kuboRpcClient = ipfsClient({ url: 'http://localhost:3001/api' });
// // const kuboService = kuboRpcClient.getService('your_service_name');

// const addFileToIPFS = async (file) => {
//   try {
//     const result = await kuboService.addIpfsFile(ipfs, file);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const FileUpload = () => {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleUploadClick = () => {
//     if (selectedFile) {
//       addFileToIPFS(selectedFile);
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUploadClick}>Upload</button>
//     </div>
//   );
// };

// export default FileUpload;
