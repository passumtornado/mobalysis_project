import React from 'react'
import  Pagination  from 'react-bootstrap/Pagination'

const PaginationComponent = ({championPerPage,totalChampions,paginate}) => {
   const pageNumber = [];
   for(let i=1;i<=Math.ceil(totalChampions/championPerPage);i++){
       pageNumber.push(i)
   }

    return (
        <Pagination>
          <Pagination.Prev/>
          {pageNumber.map(number=>(
            <Pagination.Item key={number} onClick={()=>paginate(number)}>{number}</Pagination.Item>
          ))}
           
          <Pagination.Next/>
        </Pagination>
    )
}

export default PaginationComponent
