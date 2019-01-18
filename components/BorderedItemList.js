import BorderedItem from "./BorderedItem";

const BorderedItemList = props => (
  <div>
    {props.items && props.items.length > 0 ? (
      <ul className="bordered-list">
        {props.items.map(item => (
          <BorderedItem title={item.title} body={item.body} />
        ))}
      </ul>
    ) : (
      <p>Nothing to see here :P</p>
    )}

    <style jsx>{`
      .bordered-list {
        list-style-type: none;
      }
    `}</style>
  </div>
);

export default BorderedItemList;
