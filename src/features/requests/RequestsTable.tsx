import React from 'react';
import {Table, TableContainer} from "@/features/requests/Requests.styled";
import Image from "next/image";
import {FakeDataType, fakeListData, ITEMS_PER_PAGE} from "@/common/constants/fakeData";
import {RequestsTablePropsType} from "@/features/requests/types";



export const RequestsTable = ({currentPage, setSelectedRequest}: RequestsTablePropsType) => {
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = fakeListData.slice(startIndex, endIndex);
  const handleRequestClick = (req: FakeDataType) => {
    setSelectedRequest(req);
  };

  return (
    <TableContainer>
      <Table>
        <thead>
        <tr>
          <th>Тема</th>
          <th>Номер</th>
          <th>Дата создания</th>
          <th>Дата изменения</th>
          <th>Крайний срок</th>
          <th>Состояние</th>
        </tr>
        </thead>
        <tbody>
        {currentItems.map((req) => (
          <tr key={req.number} onClick={() => handleRequestClick(req)} style={{cursor: 'pointer'}}>
            <td style={{color: 'blue'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                {req.title}{req.awaiting_response &&
                  <Image alt={'attention'} src={'/icon/exclamation.svg'} width={20} height={20}/>
              }
              </div>
            </td>
            <td>{req.number}</td>
            <td>{req.create}</td>
            <td>{req.change}</td>
            <td>{req.deadline}</td>
            <td>{req.status}</td>
          </tr>
        ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

