const SectionTitle = props => (
  <div className="section-title">
    <h1>{props.title}</h1>
    <style global jsx>{`
      .section-title {
        width: 170px;
        margin-left: 3;
        background-color: black;
        color: white;
      }
    `}</style>
  </div>
);

export default SectionTitle;
