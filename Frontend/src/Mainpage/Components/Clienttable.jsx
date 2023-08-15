import React from 'react'
import { useQuery, InMemoryCache} from '@apollo/client';
import { gql } from '@apollo/client';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "../Maincomponent/table"

const GET_USER_CLIENTS = gql`

query getuserclients{
  userclients {
    id
    Clientusername
    Clientemail
    Clientmobile
  }
}`

const Clienttable = () => {
    const { loading, error, data } = useQuery(GET_USER_CLIENTS); 
    console.log(data)
    if(loading) return 'loading'
    if(error) return 'Something went wrong'
    
  if (data) return (
    <div>
       <div className="m-auto max-w-3xl px-3 py-5">
            <span className='text-xl font-semibold'>
              List of Clients<br/>
            </span>
            <Table className='mt-4'>
      <TableCaption>A list of your Clients.</TableCaption>
      <TableHeader className='bg-gray-200'>
        <TableRow>
          <TableHead className="w-[100px]">Client</TableHead>
          <TableHead>Name</TableHead>
          <TableHead className='text-right'>Statuss</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.userclients?.map((userclient) => (
          <TableRow key={userclient.id}>
            <TableCell className="font-medium">{userclient.Clientusername}</TableCell>
            <TableCell>{userclient.Clientemail}</TableCell>
            <TableCell className='text-right'>{userclient.Clientmobile}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>

        </div> 

    </div>
  )
}

export default Clienttable
