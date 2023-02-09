import { HhDataProps } from "./HhData.props";
import styles from "./HhData.module.css";
import cn from "classnames";
import { Card } from "../Card/Card";

import RateIcon from "./rate.svg";
import { priceKz } from '@/helpers/helpers';

export const HhData = ({ count, juniorSalary, middleSalary, seniorSalary }: HhDataProps): JSX.Element => {
  return (
    <div className={styles.hh}>
      <Card className={styles.count}>
        <div className={styles.title}>Всего Вакансий</div>
        <div className={styles.countValue}>{count}</div>
      </Card>
      <Card className={styles.salary}>
        <div>
          <div className={styles.title}>Начальный</div>
          <div className={styles.salaryValue}>{priceKz(juniorSalary)}</div>
          <div className={styles.rate}>
            <RateIcon className={styles.filled} />
            <RateIcon />
            <RateIcon />
          </div>
        </div>
        <div>
          <div className={styles.title}>Средний</div>
          <div className={styles.salaryValue}>{priceKz(middleSalary)}</div>
          <div className={styles.rate}>
            <RateIcon className={styles.filled} />
            <RateIcon className={styles.filled} />
            <RateIcon  />
          </div>
        </div>
        <div>
          <div className={styles.title}>Проффесионал</div>
          <div className={styles.salaryValue}>{priceKz(seniorSalary)}</div>
          <div className={styles.rate}>
            <RateIcon className={styles.filled} />
            <RateIcon className={styles.filled} />
            <RateIcon className={styles.filled} />
          </div>
        </div>
      </Card>
    </div>
  );
};
