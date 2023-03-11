import styles from "./Menu.module.css";
import classNames from "classnames";
import { format } from "date-fns";
import { KeyboardEvent, useContext } from "react";
import { AppContext } from "@/context/app.context";
import { FirstLevelMenuItem, PageItem } from "@/interfaces/menu.interface";

import Link from "next/link";
import { useRouter } from "next/router";
import { firstLevelMenu } from "@/helpers/helpers";
import { motion } from "framer-motion";

export default function Menu(): JSX.Element {
	const { menu, setMenu, firstCategory } = useContext(AppContext);
	const router = useRouter();
	const variants = {
		visible: {
			marginBottom: 20,
			transition: {
				when: "beforeChildren",
				staggerChildren: 0.1,
			},
		},
		hidden: {
			marginBottom: 0,
		},
	};
	const variantsChildren = {
		visible: {
			opacity: 1,
			height: "auto",
			marginBottom: "10px",
		},
		hidden: {
			opacity: 0,
			height: 0,
		},
	};

	const openSecondLevel = (secondCategory: string) => {
		setMenu &&
			setMenu(
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
									[styles.firstLevelActive]:
										menu.id == firstCategory,
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
						m.pages
							.map((p) => p.alias)
							.includes(router.asPath.split("/")[2])
					) {
						m.isOpened = true;
					}
					return (
						<div key={m._id.secondCategory}>
							<div
								tabIndex={0}
								onKeyDown={(key: KeyboardEvent) => {
                  if(key.code=="Space"|| key.code=='Enter'){
                    key.preventDefault()
                    openSecondLevel(m._id.secondCategory);
                  }
								}}
								className={styles.secondLevel}
								onClick={() =>
									openSecondLevel(m._id.secondCategory)
								}
							>
								{m._id.secondCategory}
							</div>
							<motion.div
								layout
								initial={m.isOpened ? "visible" : "hidden"}
								animate={m.isOpened ? "visible" : "hidden"}
								variants={variants}
								className={classNames(styles.secondLevelBlock)}
							>
								{buildThirdLevel(m.pages, menuItem.route, m.isOpened??false)}
							</motion.div>
						</div>
					);
				})}
			</div>
		);
	};
	const buildThirdLevel = (pages: PageItem[], route: string, isOpened:boolean) => {
		return pages.map((page) => (
			<motion.div key={page._id} variants={variantsChildren}>
				<Link
        tabIndex={isOpened?0:-1}
					href={`/${route}/${page.alias}`}
					className={classNames(styles.thirdLevel, {
						[styles.thirdLevelActive]:
							`/${route}/${page.alias}` == router.asPath,
					})}
				>
					{page.category}
				</Link>
			</motion.div>
		));
	};

	return <div className={styles.menu}>{buildFirstLevel()}</div>;
}
