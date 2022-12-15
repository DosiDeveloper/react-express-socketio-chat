import Chat from "../components/Chat";
import Head from "next/head" ;


export default function Index () {
  return (<>
    <Head>
      <title>Chat with react</title>
      <meta name="description" content="this is a chat with react for fun" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    </Head>
    <Chat />
  </>
  )
}
