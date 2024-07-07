import {GlobalStyles} from "@/styles/GlobalStyles/GlobalStyles";
import {useClient} from "@/common/hooks/useClient";
import {AppPropsWithLayout} from "@/common/types/types";


export default function App({
                              Component,
                              pageProps: {session, ...pageProps},
                            }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page)

  const client = useClient()
  return (

    client && getLayout(
      <>
        <GlobalStyles/>
        <Component {...pageProps} />
      </>
    )
  )
}