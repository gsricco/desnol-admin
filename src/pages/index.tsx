import {Container} from "@/styles/GlobalStyles/GlobalStyles";
import {useAuth} from "@/common/hooks/useAuth";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {PATH} from "@/common/constants/PATH";


export default function Home() {
  const isAuth = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isAuth) {
      router.push(PATH.LOGIN)
    }
    else {
      router.push(PATH.REQUESTS)
    }
  }, [isAuth])

  return (
    <Container>
      {/*Тут могла быть ваша реклама*/}
    </Container>
  )
}


