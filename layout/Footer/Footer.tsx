import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import classNames from 'classnames';
import { Ptag } from '@/components';
import {format} from 'date-fns'


export default function Footer({ children, className, ...props }:FooterProps): JSX.Element {
  return (
    <footer {...props} className={classNames(styles.footer, className)}>
      <Ptag>
        OwlTop © 2023 - {format(new Date(), "yyyy")} Все права защищены
      </Ptag>
      <Ptag>
        <a href="#" target="_blank">
          Пользовательское соглашение
        </a>
      </Ptag>
      <Ptag>
        <a href="#" target="_blank">
          Политика конфиденциальности
        </a>
      </Ptag>
    </footer>
  );
};
