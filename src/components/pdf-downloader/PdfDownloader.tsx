import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  StyleSheet,
} from "@react-pdf/renderer";
import { forwardRef } from "react";

const PdfDownloader = forwardRef(function ({ pdfData }: { pdfData?: any }) {
  const styles = StyleSheet.create({
    page: {
      padding: 20,
    },
    text: {
      marginBottom: 10,
    },
  });

  const generatePDF = () => {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <Text style={styles.text}>User id : {pdfData?.id || "-"}</Text>
          <br />
          <Text style={styles.text}>User Name : {pdfData?.name || "-"}</Text>
          <br />
          <Text style={styles.text}>User Email : {pdfData?.email || "-"}</Text>
          <br />
          <Text style={styles.text}>
            User Number : {pdfData?.number || "-"}
          </Text>
          <br />
          <Text style={styles.text}>User Role : {pdfData?.role || "-"}</Text>
          <br />
          <Text style={styles.text}>
            User Address : {pdfData?.address || "-"}
          </Text>
        </Page>
      </Document>
    );
  };

  return (
    <div>
      <PDFDownloadLink
        document={generatePDF()}
        fileName={`downloaded_${pdfData?.name}.pdf`}
      >
        <button className="table__action-link">Download pdf</button>
      </PDFDownloadLink>
    </div>
  );
});

export default PdfDownloader;
