import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const Shell = props => (
  <div className="shell">
    <div className="shell-column">{props.children}</div>
    <style jsx>{`
      .shell {
        width: 100%;
        height: calc(100vh);
        will-change: overflow;
        backface-visibility: hidden;
      }
      .shell-column {
        overflow: auto;
        height: auto;
        padding: 0.5rem;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none;
        margin-left: 3%;
        margin-right: 3%;
      }
      @media only screen and (min-width: 750px) {
        .shell {
          display: flex;
          overflow: hidden;
        }
        .shell-column {
          width: 100%;
          margin: 0 auto;
          margin-left: 3%;
          margin-right: 3%;
        }
      }
      .shell-column section {
        margin-top: 60px;
      }

      .shell-column::-webkit-scrollbar {
        display: none;
      }
    `}</style>
  </div>
);

export default Shell;
