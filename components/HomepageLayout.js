import Header from "./Header";
import Shell from "./Shell";
import Head from "next/head";

const layoutStyle = {
  // margin: 20,
  // padding: 20,
  // border: "1px solid #DDD"
};

const HomepageLayout = props => (
  <div>
    <Head>
      <title>BryanMutai.co</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.6.3/css/brands.css"
        integrity="sha384-1KLgFVb/gHrlDGLFPgMbeedi6tQBLcWvyNUN+YKXbD7ZFbjX6BLpMDf0PJ32XJfX"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.6.3/css/fontawesome.css"
        integrity="sha384-jLuaxTTBR42U2qJ/pm4JRouHkEDHkVqH0T1nyQXn1mZ7Snycpf6Rl25VBNthU4z0"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Oswald"
        rel="stylesheet"
      />
    </Head>

    <Header />
    <Shell>{props.children}</Shell>

    <style global jsx>{`
      body {
        font-family: "Oswald", sans-serif;
        letter-spacing: 0.05em;
        margin: 0;
      }
    `}</style>
  </div>
);

export default HomepageLayout;
