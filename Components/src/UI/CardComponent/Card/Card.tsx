import React from "react";
import type { Card as CardProps } from "../../../types/card";
import star from "../../../assets/star.jpg";
import styles from "./Card.module.css";

const Card: React.FC<CardProps> = (props) => {
  const { description, title } = props;
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <img src={star} alt={title} className={styles.image} />
      <p className={styles.description}>{description}</p>
    </article>
  );
};

export default Card;
