import { HeaderProps } from './Header.props';


export default function Header({ children, ...props }:HeaderProps ): JSX.Element {
  return <div {...props}>Header</div>;
};
