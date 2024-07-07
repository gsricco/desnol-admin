import styled from "styled-components";
import {Container} from "@/styles/GlobalStyles/GlobalStyles";

export const WrapperRequests = styled(Container)`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  overflow-x: auto; 
  -webkit-overflow-scrolling: touch; 

  @media (max-width: 588px) {
    justify-content: inherit;
  }
`;

export const Table = styled.table`
  width: 80%;
  border-collapse: collapse;
  margin-top: 1rem;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f4f4f4;
  }

  tr:hover {
    background-color: #f1f1f1;
  }
`;

export const PageNumbers = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const PageNumber = styled.button<{ isActive: boolean }>`
  background-color: ${props => (props.isActive ? '#6fb543' : 'white')};
  color: ${props => (props.isActive ? 'white' : 'black')};
  border: 1px solid #ccc;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const MoreDetails = styled.div`
  margin: 1rem;
  padding: 1rem;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`;