import React, {useEffect, useState} from 'react';
import {getLayoutBasic} from "@/common/components/Layout/Basic";
import {FakeDataType, fakeListData, ITEMS_PER_PAGE} from "@/common/constants/fakeData";
import {RequestItem} from "@/features/requests/RequestItem";
import {PATH} from "@/common/constants/PATH";
import {useRouter} from "next/router";
import {useAuth} from "@/common/hooks/useAuth";
import {WrapperRequests} from "@/features/requests/Requests.styled";
import {RequestsTable} from "@/features/requests/RequestsTable";
import {Pagination} from "@/common/components/Pagination/Pagination";


const Requests = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRequest, setSelectedRequest] = useState<FakeDataType | null>(null);
  const router = useRouter()
  const isAuth=useAuth()

  const totalPages = Math.ceil(fakeListData.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };


  useEffect(() => {
    if (!isAuth) {
      router.push(PATH.LOGIN)
    }
  }, [isAuth, router])

  return (
    <WrapperRequests>
      {selectedRequest ? (
        <RequestItem selectedRequest={selectedRequest} setSelectedRequest={setSelectedRequest}/>
      ) : (
        <>
          <RequestsTable currentPage={currentPage} setSelectedRequest={setSelectedRequest}/>
          <Pagination totalPages={totalPages} handlePageChange={handlePageChange} currentPage={currentPage}/>
        </>
      )}
    </WrapperRequests>
  );
};

Requests.getLayout = getLayoutBasic;

export default Requests;
