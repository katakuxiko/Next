import { SidebarProps } from './Sidebar.props';


export default function Sidebar({ children, ...props }: SidebarProps): JSX.Element {
  return <div {...props}>Sidbar</div>;
};
