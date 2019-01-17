const ShellColumn = props => (
  <div className="shell-column">
    {props.children}
    <style global jsx>{`
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
        .shell-column {
          width: 33%;
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

export default ShellColumn;
