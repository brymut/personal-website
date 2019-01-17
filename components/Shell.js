const Shell = props => (
  <div className="shell">
    {props.children}
    <style global jsx>{`
      .shell {
        width: 100%;
        height: calc(100vh);
        will-change: overflow;
        backface-visibility: hidden;
      }
      @media only screen and (min-width: 750px) {
        .shell {
          display: flex;
          overflow: hidden;
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
