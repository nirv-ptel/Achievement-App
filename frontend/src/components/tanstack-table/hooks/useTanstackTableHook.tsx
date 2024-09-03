/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, useState } from "react";

import clsx from "clsx";
import { ColumnDef } from "@tanstack/react-table";
import { useMutation } from "react-query";

import { getTanstackData } from "../api";
import useTanstackData from "./useTanstackData";
import { formatDate, formatTime } from "../../../shared/helper/util";

const useTanstackTableHook = () => {
  const [tanstackState, setTanstackState] = useState();
  const { mutate: fetchTanstackData, isLoading } = useMutation(
    () => getTanstackData(),
    {
      onSuccess: (response) => {
        setTanstackState(response?.data);
      },
    }
  );

  const { data: tanstackData } = useTanstackData();

  const columns = useMemo<ColumnDef<any>[]>(
    () => [
      {
        header: "Payment Type",
        accessorKey: "",
        cell: (data) => (
          <span className={"capitalize"}>{data.row.original.type}</span>
        ),
      },

      {
        header: "Status",
        accessorKey: "",
        cell: (data) => (
          <span
            className={clsx(
              { started_status: data.row.original.status == "started" },
              { completed_status: data.row.original.status == "completed" },
              { error_status: data.row.original.status == "error" },
              "capitalize"
            )}
          >
            {data.row.original.status}
          </span>
        ),
      },
      {
        header: "Message",
        accessorKey: "",
        cell: (data) => data.row.original.reason,
      },
      {
        header: "Entry Time",
        accessorKey: "",
        cell: (data) => formatTime(data.row.original.created_at).toUpperCase(),
      },
      {
        header: "Sync Time",
        accessorKey: "",
        cell: (data) => formatTime(data.row.original.finished_at).toUpperCase(),
      },
    ],
    []
  );
  return {
    fetchTanstackData,
    response: tanstackState || (tanstackData ? tanstackData : undefined),
    setResponse: setTanstackState,
    columns,
    isLoading,
  };
};

export default useTanstackTableHook;
