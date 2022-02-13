import { useState } from "react";
import "./App.css";

function App() {

  const [files, setFiles] = useState([]);

  function overrideEventDefaults(event) {
    event.preventDefault();
    event.stopPropagation();
  };

  function handleDragAndDropFiles(event) {
    overrideEventDefaults(event);
    if (!event.dataTransfer) return;
    handleFiles(event.dataTransfer.files);
  }

  const handleFiles = (fileList) => {
    if (fileList) {
      let files = Array.from(fileList);
      setFiles(files);
      console.log(files);
    }
  };

  return (
    <>
      {
        files.length > 0 ?
          <span className="content">{"No. of files to be uploaded : " + files.length}</span>
          :
          <div
            id ="dragAndDropContainer"
            className="dragAndDropContainer"
            onDrop={overrideEventDefaults}
            onDragEnter={overrideEventDefaults}
            onDragLeave={overrideEventDefaults}
            onDragOver={overrideEventDefaults}
          >
            <div
              id ="dragAndDropArea"
              className="dragAndDropArea"
              onDrop={handleDragAndDropFiles}
              onDragEnter={overrideEventDefaults}
              onDragLeave={overrideEventDefaults}
              onDragOver={overrideEventDefaults}
            >
              <label className="info dragText">
                Drag &amp; Drop to upload
              </label>
            </div>
          </div>
      }
    </>
  );
}

export default App;
