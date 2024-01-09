import { PDFDownloadLink, Document, Page, Text } from "@react-pdf/renderer";
import { forwardRef } from "react";

const PdfDownloader = forwardRef(function ({ pdfData }: { pdfData?: any }) {
  const generatePDF = () => {
    return (
      <Document>
        <Page size="A4">
          <Text>{pdfData?.id}</Text>
          <br />
          <Text>{pdfData?.name}</Text>
          <br />
          <Text>{pdfData?.email}</Text>
        </Page>
      </Document>
    );
  };

  return (
    <div>
      <PDFDownloadLink
        document={generatePDF()}
        fileName={`downloaded_${pdfData?.id}.pdf`}
      >
        <button className="table__action-link">Download pdf</button>
      </PDFDownloadLink>
    </div>
  );
});

export default PdfDownloader;
