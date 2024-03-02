
import { useState, useEffect } from 'react';
import { storage } from '../firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import HomeNavbar from '../LandingPage/Components/Navbar';
import styled from 'styled-components';
import UserNavbar from '../Navbar/Navbar';

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
    <>
      <HomeNavbar />
      <div className="App">
        <UploadSection>
          <h1>Assignments</h1>
          <br />
          <input
            type="file"
            className="form-control"
            onChange={(event) => {
              setFileUpload(event.target.files[0]);
            }}
          />
          <button className="btn" onClick={uploadFile}>
            Upload File
          </button>
        </UploadSection>
      </div>
    </>
  );
}

const UploadSection = styled.section`
*{
  align-items: center;
  justify-content: center;
  display: flex;

}
  .form-control {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    padding: 0.9rem 1.75rem;
    background-color: #336cff;
    color: white;
    outline: none;
    border: none;
    border-radius: 5rem;
    font-size: 1.1rem;
    cursor: pointer;
    font-weight: 600;
    transition: 0.2s;
  }
  .btn {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    padding: 0.9rem 1.75rem;
    background-color: #336cff;
    color: white;
    outline: none;
    border: none;
    border-radius: 5rem;
    font-size: 1.1rem;
    cursor: pointer;
    font-weight: 600;
    transition: 0.2s;
  }
`;



export default Upload;
