import { ProductProps } from "./Product.props";
import styles from "./Product.module.css";
import cn from "classnames";
import { Card } from "../Card/Card";
import Rating from "../Rating/Rating";
import { Tag } from "../Tag/Tag";
import Image from "next/image";
import { getEnvironmentData } from "worker_threads";
import { declOfNum, priceKz } from "@/helpers/helpers";
import { Button } from "../Button/Button";
import { Divider } from "../Divider/Divider";
import { useState } from "react";
import { Review } from '../Review/Review';
import { ReviewForm } from '../ReviewForm/ReviewForm';
export const Product = ({
  product,
  className,
  ...props
}: ProductProps): JSX.Element => {
  const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
  return (
    <>
      <Card className={cn(styles.product, className)}>
        <div className={styles.logo}>
          <Image
            src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
            alt={product.title}
            width={70}
            height={70}
          />
        </div>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.price}>
          {priceKz(product.price)}
          {product.oldPrice && (
            <Tag className={styles.oldPrice} color="green">
              {priceKz(product.price - product.oldPrice)}
            </Tag>
          )}
        </div>
        <div className={styles.credit}>
          {priceKz(product.credit)}/<span className={styles.month}>мес</span>
        </div>
        <div className={styles.rating}>
          <Rating rating={product.reviewAvg ?? product.initialRating} />
        </div>
        <div className={styles.tags}>
          {product.categories.map((category) => (
            <Tag className={styles.category} color="ghost" key={category}>
              {category}
            </Tag>
          ))}
        </div>
        <div className={styles.priceTitle}>Цена</div>
        <div className={styles.creditTitle}>Кредит</div>
        <div className={styles.rateTitle}>
          {product.reviewCount}{" "}
          {declOfNum(product.reviewCount, ["отзыв", "отзыва", "отзывов"])}
        </div>
        <Divider className={styles.hr} />
        <div className={styles.description}>{product.description}</div>
        <div className={styles.feature}>
          {product.characteristics.map((char) => (
            <div className={styles.characteristics} key={char.name}>
              <span className={styles.characteristicsName}>{char.name}</span>
              <span className={styles.characteristicsDots}></span>
              <span className={styles.characteristicsValue}>{char.value}</span>
            </div>
          ))}
        </div>
        <div className={styles.advBlock}>
          {product.advantages && (
            <div className={styles.advantages}>
              <div className={styles.advTitle}>Преимущества</div>
              <div>{product.advantages}</div>
            </div>
          )}
          {product.disadvantages && (
            <div className={styles.disadvantages}>
              <div className={styles.advTitle}>Недостатки</div>
              <div>{product.disadvantages}</div>
            </div>
          )}
        </div>
        <Divider className={styles.hr} />
        <div className={styles.actions}>
          <Button appearence="primary">Узнать подробнее</Button>
          <Button
            className={styles.reviewButton}
            appearence="ghost"
            arrow={isReviewOpened ? "down" : "right"}
            onClick={() => setIsReviewOpened(!isReviewOpened)}
          >
            Читать отзывы
          </Button>
        </div>
      </Card>
      <Card
        color="blue"
        className={cn(styles.rewiews, {
          [styles.opened]: isReviewOpened,
          [styles.closed]: !isReviewOpened,
        })}
      >
        {product.reviews.map((r) => (
          <div key={r._id}>
            <Review review={r}  />
            <Divider/>
          </div>
        ))}
        <ReviewForm productId={product._id}/>
      </Card>
    </>
  );
};
