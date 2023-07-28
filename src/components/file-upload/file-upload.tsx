// Installed by "react-uploader".
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";

// Initialize once (at the start of your app).
const uploader = Uploader({ apiKey: process.env.FILEUPLOAD_API_KEY || "" }); 

const FileUploader = () => (
  <UploadButton uploader={uploader}
                options={{ multi: true }}
                onComplete={files => alert(files.map(x => x.fileUrl).join("\n"))}>
    {({onClick}) =>
      <button onClick={onClick} className="w-full bg-red-500 text-white px-1 py-2 rounded-md">
        Upload Images
      </button>
    }
  </UploadButton>
)

export default FileUploader;