import {FakeDataType} from "@/common/constants/fakeData";

export type RequestsTablePropsType = {
  currentPage: number
  setSelectedRequest: (set: FakeDataType | null) => void
}


export type RequestItemPropsType = {
  selectedRequest: FakeDataType
  setSelectedRequest: (set: FakeDataType | null) => void
}