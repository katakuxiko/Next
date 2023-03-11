import { FunctionComponent, KeyboardEvent, useRef, useState } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { LayoutProps } from "./Latout.props";
import Sidebar from "./Sidebar/Sidebar";

import styles from "./Layout.module.css";
import { AppContextProvider, IAppContext } from "@/context/app.context";
import { Up } from "@/components";
import classNames from "classnames";

function Layout({ children }: LayoutProps): JSX.Element {
	const [isSkipLinkDisplayed, setIsSkipLinkDisplayed] =
		useState<boolean>(false);
    const bodyRef = useRef<HTMLDivElement>(null)
	const skipContentAction = (key: KeyboardEvent) => {
        if(key.code=='Space'||key.code == 'Enter') {
            key.preventDefault();
            bodyRef.current?.focus();
            setIsSkipLinkDisplayed(false)
        }
        setIsSkipLinkDisplayed(false)
    };
	return (
		<div className={styles.wrapper}>
			<a
				tabIndex={1}
				onFocus={() => setIsSkipLinkDisplayed(true)}
				onKeyDown={(e)=>skipContentAction(e)}
				className={classNames(styles.skipLink, {
					[styles.displayed]: isSkipLinkDisplayed,
				})}
			>
				Сразу к содержанию
			</a>
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<div tabIndex={0} ref={bodyRef} className={styles.body}>{children}</div>
			<Footer className={styles.footer} />
			<Up />
		</div>
	);
}
export const withLayout = <T extends Record<string, unknown> & IAppContext>(
	Component: FunctionComponent<T>
) => {
	return function withLayoutComponent(props: T) {
		return (
			<AppContextProvider
				menu={props.menu}
				firstCategory={props.firstCategory}
			>
				<Layout>
					<Component {...props} />
				</Layout>
			</AppContextProvider>
		);
	};
};
