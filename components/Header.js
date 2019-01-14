import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <header>
    {/* <img src="img/FUSE-LOGO.jpg" /> */}
    <h1>BRYANMUTAI.CO</h1>
    <style jsx>{`
      header {
        height: 60px;
        width: 100%;
        background-color: black;
        position: fixed;
        top: 0;
        left: 0;
        padding: 0;
        margin: 0;
        z-index: 1;
      }

      header h1 {
        color: white;
        font-size: 24px;
        text-align: center;
      }
      @media only screen and (min-width: 750px) {
        header h1 {
          left: 45%;
        }
      }
    `}</style>
  </header>
);

export default Header;
