import Head from "next/head"
import { Box } from "@chakra-ui/react"

function Layout({children}) {
  return (
    <>
      <Head>
        <title>Real State</title>
      </Head>
      <Box maxWidth={'1280px'} m='auto'>
        <header>
          Navbar
        </header>
        <main>
          { children}
        </main>
      </Box>
    </>
  )
}

export default Layout