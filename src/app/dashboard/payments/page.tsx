import React from 'react'

import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      amount: 1,
      status: "pending",
      email: "am@example.com",
    },
    {
        id: "2",
        amount: 2,
        status: "pending",
        email: "dm@example.com",
      },
      {
        id: "3",
        amount: 3,
        status: "pending",
        email: "4m@example.com",
      },
      {
        id: "4",
        amount: 4,
        status: "pending",
        email: "ym@example.com",
      },
      {
        id: "5",
        amount: 5,
        status: "pending",
        email: "jm@example.com",
      },
      {
        id: "6",
        amount: 6,
        status: "pending",
        email: "om@example.com",
      },
      {
        id: "7",
        amount: 7,
        status: "pending",
        email: "m@example.com",
      },
      {
        id: "8",
        amount: 8,
        status: "pending",
        email: "m@example.com",
      },
      {
        id: "9",
        amount: 9,
        status: "pending",
        email: "m@example.com",
      },
      {
        id: "10",
        amount: 10,
        status: "pending",
        email: "m@example.com",
      },
      {
        id: "11",
        amount: 11,
        status: "pending",
        email: "m@example.com",
      },
      {
        id: "12",
        amount: 12,
        status: "pending",
        email: "m@example.com",
      },
      {
        id: "13",
        amount: 13,
        status: "pending",
        email: "m@example.com",
      },
      {
        id: "14",
        amount: 14,
        status: "pending",
        email: "m@example.com",
      },
      {
        id: "15",
        amount: 15,
        status: "pending",
        email: "m@example.com",
      },
      {
        id: "16",
        amount: 16,
        status: "pending",
        email: "m@example.com",
      },
      {
        id: "17",
        amount: 17,
        status: "pending",
        email: "m@example.com",
      },
      
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}



