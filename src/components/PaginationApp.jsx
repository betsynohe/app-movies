import React from 'react';
import { Pagination } from 'react-bootstrap';

export default function PaginationApp({ setCurrentPage, currentPage, totalPages }) {
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const pagesToShow = 5; // Establece el número de páginas que deseas mostrar.

    const calculatePages = () => {
        const middle = Math.ceil(pagesToShow / 2);
        let start = currentPage - middle + 1;
        let end = start + pagesToShow - 1;

        if (start <= 0) {
            start = 1;
            end = Math.min(pagesToShow, totalPages);
        } else if (end > totalPages) {
            end = totalPages;
            start = Math.max(1, end - pagesToShow + 1);
        }

        return Array.from({ length: end - start + 1 }, (_, index) => start + index);
    };

    return (
        <Pagination className="mt-4" style={{display:"flex", justifyContent:"center"}}>
            <Pagination.Prev
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
            />
            {calculatePages().map((page) => (
                <Pagination.Item
                    key={page}
                    active={page === currentPage}
                    onClick={() => handlePageChange(page)}
                >
                    {page}
                </Pagination.Item>
            ))}
            <Pagination.Next
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
            />
        </Pagination>
    );
}
