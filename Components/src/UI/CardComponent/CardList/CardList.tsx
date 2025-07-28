import { mockCards } from "../../../mock/mockCards";
import Card from "../Card/Card";
import styles from "./CardList.module.css";

const CardList = () => {
  const list = mockCards;
  return (
    <div className={styles.container}>
      <div className={styles.header}>Card Component</div>
      <div className={styles.list}>
        {list?.map((item) => (
          <Card
            key={item?.id}
            description={item?.description}
            title={item.title}
            id={item?.id}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
