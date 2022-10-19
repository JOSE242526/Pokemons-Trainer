import React from 'react'
import "./Styles/pagination.css"

const Pagination = ({page, pagesLength, setPage}) => {

    const pagePerBlock = 8
    const currentBlock = Math.ceil(page / pagePerBlock)
    const blockLength = Math.ceil(pagesLength / pagePerBlock)


    const arrPages = [] 
    const initialPage = (currentBlock - 1) * pagePerBlock + 1
    const limitPage = blockLength ===  currentBlock ? pagesLength : currentBlock * pagePerBlock
    for(let i = initialPage; i <= limitPage; i++){
        arrPages.push(i)
    }

    const handlePrev = () => {
        setPage(page - 1)
    }

    const handleNext = () => {
        setPage(page + 1)
    }

    const handlePage = () => {
        setPage(currentPage)
    }


  return (
    <div className='pagination'>
        {
            page > 1 && 
            <div onClick={handlePrev} className='pagination__prev pagination__active'>&#60;</div>
        }
        <ul className='pagination__container'>
            {
                arrPages.map(e => (
                    <li 
                    className={`pagination__page" ${page === e && "pagination__active"}`}
                    onClick={() => handlePage(e)} 
                    key={e}>
                        {e}
                    </li>
                ))
            }
            </ul>
            <div>...</div>
            {
                page < pagesLength &&
        <div onClick={handleNext} className='pagination__next pagination__active'>&#62;</div>
        }
        
    </div>
  )
}

export default Pagination   