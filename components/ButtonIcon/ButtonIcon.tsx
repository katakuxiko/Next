import { ButtonIconProps, icons } from "./ButtonIcon.props";
import styles from "./ButtonIcon.module.css";
import cn from "classnames";
import ArrowIcon from "./arrow.svg";

export const ButtonIcon = ({
  appearence,
  icon,
  className,
  ...props
}: ButtonIconProps): JSX.Element => {
  const IconComponent = icons[icon]
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearence == "primary",
        [styles.white]: appearence == "white",
      })}
      {...props}
    >
      <IconComponent/>
    </button>
  );
};
