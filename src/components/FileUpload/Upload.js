
import { useState, useEffect } from 'react';
import { storage } from '../firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';

function Upload() {
  const [fileUpload, setFileUpload] = useState(null);
  const [fileList, setFileList] = useState([]);

  const fileListRef = ref(storage, "files/");
  const uploadFile = () => {
    if (fileUpload == null) return;
    const fileRef = ref(storage, `files/${fileUpload.name + v4()}`);
    uploadBytes(fileRef, fileUpload).then(() => {
      alert("File Uploaded");
    });
  };

  useEffect(() => {
    listAll(fileListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setFileList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className="App">
      <h1>File Uploading</h1>
      <br />
      <input 
      type="file" 
      onChange={(event) => {
        setFileUpload(event.target.files[0]);
      }}
      />
      <button onClick={uploadFile}>Upload File</button>

    </div>
  );
}

export default Upload;
