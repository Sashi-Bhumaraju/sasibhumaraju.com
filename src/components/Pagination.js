import React, { useState, useEffect } from 'react';

const Pagination = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [totalPages, setTotalPages] = useState(1);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(data);
    setTotalPages(Math.ceil(data.length / rowsPerPage));
  }, [data, rowsPerPage]);

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setCurrentPage(1);
  };

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderTableData = () => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return tableData.slice(startIndex, endIndex).map((data, index) => (
      <tr key={index}>
        <td>{data.country}</td>
        <td>{data.city}</td>
      </tr>
    ));
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return (
      <div className="pagination">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handleClick(pageNumber)}
            className={currentPage === pageNumber ? 'active' : ''}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div>
      <select value={rowsPerPage} onChange={handleRowsPerPageChange}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
      </table>
      {renderPageNumbers()}
    </div>
  );
};

export default Pagination;
