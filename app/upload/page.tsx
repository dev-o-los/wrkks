import FileUpload from "@/components/FileUpload";
import GenerateBtn from "@/components/GenerateBtn";

export default function Home() {
  return (
    <div>
      <div className="flex mt-20 text-lg text-center flex-col justify-center items-center">
        <div className="mb-12">
          Upload a PDF of your LinkedIn or your resume <br /> and generate your
          personal site
        </div>
        <FileUpload />
        <div className="pb-12"></div>
        <GenerateBtn />
      </div>
    </div>
  );
}
