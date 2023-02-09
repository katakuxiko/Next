import styles from "./Menu.module.css";
import classNames from "classnames";
import { format } from "date-fns";
import { useContext } from "react";
import { AppContext } from "@/context/app.context";
import { FirstLevelMenuItem, PageItem } from "@/interfaces/menu.interface";

import Link from "next/link";
import { useRouter } from "next/router";
import { firstLevelMenu } from '@/helpers/helpers';



export default function Menu(): JSX.Element {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const router = useRouter();

  const openSecondLevel = (secondCategory: string) => {
    setMenu && setMenu(
      menu.map((m) => {
        if (m._id.secondCategory == secondCategory) {
          m.isOpened = !m.isOpened;
        }
        return m;
      })
    );
  };

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((menu) => (
          <div key={menu.route}>
            <Link href={`/${menu.route}`}>
              <div
                className={classNames(styles.firstLevel, {
                  [styles.firstLevelActive]: menu.id == firstCategory,
                })}
              >
                {menu.icon}
                <span>{menu.name}</span>
              </div>
            </Link>

            {menu.id == firstCategory && buildSecondLevel(menu)}
          </div>
        ))}
      </>
    );
  };
  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((m) => {
          if (
            m.pages.map((p) => p.alias).includes(router.asPath.split("/")[2])
          ) {
            m.isOpened = true;
          }
          return (
            <div key={m._id.secondCategory}>
              <div className={styles.secondLevel} onClick={()=> openSecondLevel(m._id.secondCategory)}>{m._id.secondCategory}</div>
              <div
                className={classNames(styles.secondLevelBlock, {
                  [styles.secondLevelBlockOpened]: m.isOpened,
                })}
              >
                {buildThirdLevel(m.pages, menuItem.route)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((page) => (
      <Link
        key={page._id}
        href={`/${route}/${page.alias}`}
        className={classNames(styles.thirdLevel, {
          [styles.thirdLevelActive]: `/${route}/${page.alias}` == router.asPath,
        })}
      >
        {page.category}
      </Link>
    ));
  };

  return <div className={styles.menu}>{buildFirstLevel()}</div>;
}
