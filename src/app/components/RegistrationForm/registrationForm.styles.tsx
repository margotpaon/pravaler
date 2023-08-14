import styled from 'styled-components';
const WrapperContent = styled.div`
  display:flex;
  flex-direction:row;
  gap:20px;
  padding:40px;
  @media (max-width: 768px) {
    flex-direction:column;
  }
`
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    min-width: 400px;
    margin: 0 60px 0 0;

    @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 20px;
    }
`;

const StyledButton = styled.button`
    padding: 10px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    
    &:hover {
    background-color: #0056b3;
    }
    @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
    }
`;
const StyledInput = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    appearance: none;
    background: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>") no-repeat right 10px center;
    margin-bottom: 16px;
`
const StyledSelect = styled.select`
width: 100%;
padding: 10px;
font-size: 16px;
border: 1px solid #ccc;
border-radius: 4px;
appearance: none;
background: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>") no-repeat right 10px center;
margin-bottom: 16px;
`
const LocationCepDataWrapper = styled.div`
  width:100%;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;

  p {
    margin: 8px 0;
  }

  p:first-child {
    font-weight: bold;
  }
`;
const EditButton = styled.button`
  background-color: #3498db;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  background-color: #e74c3c;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
export {
    StyledForm,
    StyledButton,
    LocationCepDataWrapper, 
    DeleteButton,
    EditButton,
    WrapperContent
}