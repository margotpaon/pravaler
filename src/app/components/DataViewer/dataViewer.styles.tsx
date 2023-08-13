import styled from 'styled-components';

const ViewerContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f5f5f5;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f0f0f0;
  }
`;

const TableHeaderCell = styled.th`
  padding: 10px;
  text-align: left;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
`;

const TableCell = styled.td`
  padding: 10px;
`;
export{TableCell, TableHeaderCell, TableRow, Table, ViewerContainer}