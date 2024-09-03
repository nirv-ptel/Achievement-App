import Button from "../../../shared/button/Button";
import CommonDataTable from "../../../shared/common-data-table/CommonDataTable";
import PageHeader from "../../../shared/header/PageHeader";
import useTanstackTableHook from "../hooks/useTanstackTableHook";

const TanstackTable = () => {
  const { response, columns, fetchTanstackData } = useTanstackTableHook();

  return (
    <>
      <PageHeader label="Tanstack" navigatepage="/">
        <Button
          type="submit"
          title="Add Data"
          variant="primary"
          className="ml-auto"
        />
      </PageHeader>
      <CommonDataTable
        columns={columns}
        response={response}
        refetchFn={fetchTanstackData}
      />
    </>
  );
};

export default TanstackTable;
