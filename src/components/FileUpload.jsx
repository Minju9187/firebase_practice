import React, { useEffect, useState } from "react";
import { storage, auth } from "../firebase";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadString,
} from "firebase/storage";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    // ref 함수를 이용해서 Storage 내부 저장할 위치를 지정하고, uploadBytes 함수를 이용해서 파일을 저장합니다.
    try {
      if (selectedFile) {
        const imageRef = ref(
          storage,
          `${auth.currentUser.uid}/${selectedFile.name}`
        );
        await uploadBytes(imageRef, selectedFile);

        const downloadURL = await getDownloadURL(imageRef);
        console.log(downloadURL);
      } else {
        console.log("파일을 선택해주세요.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>파일 업로드 컴포넌트</h2>
      <input type="file" onChange={handleFileSelect} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;
