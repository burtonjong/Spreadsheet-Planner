"use client";

import { generateClient } from "aws-amplify/data";
import { useState } from "react";
import type { TableColumn } from "react-data-table-component";
import DataTable from "react-data-table-component";

import { useQuery } from "@tanstack/react-query";

import { type Schema } from "../../../amplify/data/resource";

const client = generateClient<Schema>();

const columns1: TableColumn<{
  gamblerName: string;
  totalEarnings: number;
  sesssionsAttend: number;
}>[] = [
  {
    name: "Name",
    selector: (row) => row.gamblerName,
    sortable: true,
  },
  {
    name: "Total Earnings",
    selector: (row) => row.totalEarnings,
    sortable: true,
  },
  {
    name: "Sessions Attended",
    selector: (row) => row.sesssionsAttend,
    sortable: true,
  },
];
const columns2: TableColumn<{
  date: string;
  peopleAtSession: number;
}>[] = [
  {
    name: "Date",
    selector: (row) => row.date,
    sortable: true,
  },
  {
    name: "People At Session",
    selector: (row) => row.peopleAtSession,
    sortable: true,
  },
];
const data1 = [
  { gamblerName: "Black Burton", totalEarnings: 100, sesssionsAttend: 3 },
  { gamblerName: "Yellow Austin", totalEarnings: 150, sesssionsAttend: 5 },
];

const data2 = [
  { date: "2022-01-01", peopleAtSession: 5 },
  { date: "2022-01-02", peopleAtSession: 6 },
];

export default function MainSpreadsheet() {
  /*const { data, isFetching } = useQuery({
    initialData: [] as Schema["User"]["type"][],
    initialDataUpdatedAt: 0,
    queryKey: ["Users", {}],
    queryFn: async () => {
      const response = await client.models.User.list();
      return response.data;
    },
  });*/
  const [showTable, toggleShowTable] = useState(true);

  return (
    <div className="flex w-full flex-row">
      <div className="size-full">
        <div className="flex flex-row gap-4">
          <button className="" onClick={() => toggleShowTable(true)}>
            Home
          </button>
          <button className="" onClick={() => toggleShowTable(false)}>
            Sessions Attended
          </button>
        </div>
        <div>
          {showTable ? (
            <DataTable columns={columns1} data={data1} />
          ) : (
            <DataTable columns={columns2} data={data2} />
          )}

          {/* Podium or popup of whatever */}
        </div>
      </div>
    </div>
  );
}
