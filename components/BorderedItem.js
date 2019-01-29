const BorderedItem = props => (
  <li className="bordered-item">
    <h3>{props.info.name}</h3>
    <p>{props.info.summary}</p>
    <style global jsx>{`
      .bordered-item {
        width: 90%;
        border: 5px solid #000 !important;
        margin-bottom: 25px;
      }
      .bordered-item h3 {
        margin-inline-start: 3%;
      }
      .bordered-item p {
        margin-inline-start: 3%;
      }
    `}</style>
  </li>
);

export default BorderedItem;
