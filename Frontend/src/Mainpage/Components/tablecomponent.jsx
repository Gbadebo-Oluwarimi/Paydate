import React from 'react'


import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "../Maincomponent/table"

const Tablecomponent = ({invoices}) => {

  return (
    <div> 
     <div className="m-auto max-w-3xl px-3 py-5">
            <span className='text-xl font-semibold'>
              Today's Client invoice <br/> Reminders
            </span>
            <Table className='mt-4'>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader className='bg-gray-200'>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Statuss</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>

        </div> 


    </div>
  )
}

export default Tablecomponent
