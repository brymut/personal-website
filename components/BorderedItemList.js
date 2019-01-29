import BorderedItem from "./BorderedItem";

const BorderedItemList = props => (
  <div>
    {props.items && props.items.length > 0 ? (
      <ul className="bordered-list">
        {props.items.map(item => (
          <BorderedItem info={item} key={item.id} />
        ))}
      </ul>
    ) : (
      <p>Error check logs:P</p>
    )}

    <style jsx>{`
      .bordered-list {
        list-style-type: none;
        padding-inline-start: 20px;
      }
    `}</style>
  </div>
);

export default BorderedItemList;
