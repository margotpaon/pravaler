import styled from 'styled-components';
const InputFieldWrapper = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
  }

  input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    input {
      font-size: 14px;
      padding: 8px;
    }
  }
`;
export default InputFieldWrapper;