import { useLoaderData } from "react-router-dom";
import { usePDF } from "react-to-pdf";
import Navbar from "../../Components/Main Navbar/Navbar";
import { useEffect } from "react";
import generatePDF, { Resolution, Margin } from "react-to-pdf";

const getTargetElement = () => document.getElementById("content-id");

const ReadBook = () => {
  const selectedBook = useLoaderData();
  const { targetRef } = usePDF({
    filename: `${selectedBook?.name}.pdf`,
  });

  const options = {
    // default is `save`
    method: "open",
    // default is Resolution.MEDIUM = 3, which should be enough, higher values
    // increases the image quality but also the size of the PDF, so be careful
    // using values higher than 10 when having multiple pages generated, it
    // might cause the page to crash or hang.
    resolution: Resolution.HIGH,
    page: {
      // margin is in MM, default is Margin.NONE = 0
      margin: Margin.SMALL,
      format: "letter",
      orientation: "landscape",
    },
    // Customize any value passed to the jsPDF instance and html2canvas
    // function. You probably will not need this and things can break,
    // so use with caution.
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <div
        id="content-id"
        className="flex justify-center items-center flex-col my-8"
      >
        <img src={selectedBook?.photo} className="h-[150px]" />
        <h1 className="text-center text-4xl my-5">
          &quot;{selectedBook?.name}&quot;
        </h1>
        <p ref={targetRef} className="text-center mx-6 pb-4">
          {selectedBook?.preview}
        </p>
      </div>
      <div className="flex justify-center items-center mb-14">
        <button
          className="px-5 py-3 font-medium bg-primary text-white rounded-2xl flex gap-2 items-center text-xl"
          onClick={() => generatePDF(getTargetElement, options)}
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default ReadBook;
