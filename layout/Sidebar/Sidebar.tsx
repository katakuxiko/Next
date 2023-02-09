import Menu from "../Menu/Menu";
import { SidebarProps } from "./Sidebar.props";
import Logo from '../logo.svg'
import classNames from 'classnames';
import styles from './Sidebar.module.css'
import { Search } from '@/components';
import { useRouter } from 'next/router';
export default function Sidebar({
  children,
  className,
  ...props
}: SidebarProps): JSX.Element {
  const router = useRouter();
  return (
    <div
      {...props}
      className={classNames(className, styles.sidebar)}
      onClick={() => router.push("/")}
    >
      <Logo className={styles.logo} />
      <Search />
      <Menu></Menu>
    </div>
  );
}
