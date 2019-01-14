import Header from "./Header";
import Shell from "./Shell";

const layoutStyle = {
  // margin: 20,
  // padding: 20,
  // border: "1px solid #DDD"
};

const HomepageLayout = props => (
  <div>
    <link
      href="https://fonts.googleapis.com/css?family=Oswald"
      rel="stylesheet"
    />
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
