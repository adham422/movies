import React from 'react'
import { Row } from 'react-bootstrap'
import CardMovie from './CardMovie'
import PaginationComponent from './PaginationComponent'


const MoveList = ({movies,getpage,pageCount}) => {
  return (
    <Row className='mt-3'>
    {movies.length >=1 ? (movies.map((mov)=>{
        return(
            <CardMovie key={mov.id} mov={mov}/>
        )
    })): <h2 className='text-center p-5'>لا يوجد افلام لانتهاء صلاحيه ال API</h2>}
    {movies.length >=1 ? (<PaginationComponent getpage={getpage} pageCount={pageCount}/>): null}

    
    
    </Row>
  )
}

export default MoveList
