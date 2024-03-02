
import { useState, useEffect } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import Box from "@mui/material/Box";
import styled from "styled-components";
import CNavbar from "../AdminPage/Home Page/ccomponents/CNavbar";
import Sidenav from "../AdminPage/Home Page/ccomponents/Sidenav";

function UploadedFile() {
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
      <div style={{ marginLeft: "70px" }}>
      <CNavbar />
      <Box height={170} />
      <Box sx={{ display: "flex" }}></Box>
      <Sidenav />
    <div className="App">
      <h1>Uploaded Assignments File</h1>
      <br />
      {/* <input
        type="file"
        onChange={(event) => {
          setFileUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadFile}>Upload File</button> */}

      {fileList.map((url) => {
        return <img src={url} />;
      })}
      </div>
      </div>
  );
}

export default UploadedFile;
