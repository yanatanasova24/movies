import React, {FC, PropsWithChildren, useState} from 'react';
import {Simulate} from "react-dom/test-utils";
import './Pagination.css'

interface IProps extends PropsWithChildren{
    page:number,
    total_pages:number,
    setPage:(page:number) => void,
    prevNext:{prev:number, next:number}
}

const Pagination:FC<IProps> = ({page, total_pages, setPage, prevNext}) => {
    const pageNumbers = [];

    for (let i = 1; i <= total_pages; i++) {
        pageNumbers.push(i);
    }

    const [pageLimit, setPageLimit] = useState(page<=3 ? 3 : page + 1);
    const [minPageLimit, setMinPageLimit] = useState(page>3 ? page - 2 : 0);

    const paginate = (page:number) =>{
        setPage(page);
        if(page > 2){
            setPageLimit(page + 1);
            setMinPageLimit(page - 2);
        }
        if(page <= 2){
            setMinPageLimit(0);
            setPageLimit(3);
        }
    }

    const previousPage = () => {
        setPage(page - 1);
        if(page > 2){
            setPageLimit(page);
            setMinPageLimit(page - 3);
        }
        if(page <= 2){
            setMinPageLimit(0);
            setPageLimit(3);
        }
    };

    const nextPage = () => {
        setPage((page + 1))
        if(page > 2){
            setPageLimit(page + 1);
            setMinPageLimit(page - 2);
        }
    };

    let pageIncrementEllipses = null;
    if(total_pages > pageLimit){
        pageIncrementEllipses = <li>&hellip;</li>
    }
    let pageDecremenEllipses = null;
    if(minPageLimit >=1){
        pageDecremenEllipses = <li>&hellip;</li>
    }

    return (
        <div>
            <div className="pagination-container">
                <ul className="pagination">
                    <button onClick={previousPage} disabled={!prevNext.prev} className="page-number">
                        Prev
                    </button>
                    {pageDecremenEllipses}
                    {pageNumbers.map((number) => {
                        if(number <= pageLimit && number > minPageLimit) {
                            return (
                        <li
                            key={number}
                            onClick={() => paginate(number)}
                            className={
                                'page-number ' + (number === page ? 'active' : '')
                            }
                        >
                            {number}
                        </li>
                    ); } else{
                                return null;
                            }})}
                    {pageIncrementEllipses}
                    <button onClick={nextPage} disabled={!prevNext.next} className="page-number">
                        Next
                    </button>
                </ul>
            </div>
        </div>
    );
};

export {Pagination};