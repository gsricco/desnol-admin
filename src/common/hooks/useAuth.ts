import {getItem} from "@/common/hooks/useLocalStorage";

export const useAuth = () => {
  const token: string | undefined = getItem('accessToken')

  if (token!=='desnol') {
    return false
  }

  return true
}
