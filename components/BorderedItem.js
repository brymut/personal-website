const BorderedItem = props => (
  <li className="bordered-item">
    <h3>{props.title}</h3>
    <p>{props.body}</p>
    <style global jsx>{`
      .bordered-item {
        width: 90%;
        border: 5px solid #000 !important;
        margin-bottom: 25px;
      }
    `}</style>
  </li>
);

export default BorderedItem;
