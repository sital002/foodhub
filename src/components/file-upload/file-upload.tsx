// Installed by "react-uploader".
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";



interface FileUploaderProps {
  images: string[],
  setImages: (arg: string[]) => void,
}
// Initialize once (at the start of your app).
const uploader = Uploader({ apiKey: process.env.NEXT_PUBLIC_FILE_UPLOAD_API_KEY || "" });




const FileUploader = ({ images, setImages }: FileUploaderProps) => {
  function handleComplete(files: any) {
    console.log(files);
    setImages(files.map((item: any) => item.fileUrl))
  }

  return <UploadButton uploader={uploader}
    options={
      {
        multi: true,
        maxFileCount: 4,
        path: {
          folderPath: "/foodhub/products"
        }
      }}
    // onComplete={files => alert(files.map(x => x.fileUrl).join("\n"))}>
    onComplete={files => handleComplete(files)}>
    {({ onClick }) =>
      <button onClick={onClick} className="w-full bg-red-500 text-white px-1 py-2 rounded-md">
        Upload Images
      </button>
    }
  </UploadButton>
}

export default FileUploader;