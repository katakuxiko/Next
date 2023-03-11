import { SearchProps } from "./Search.props";
import styles from "./Search.module.css";
import cn from "classnames";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { useState } from "react";
import SearchIcon from "./Search.svg";
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { IReviewForm } from '../ReviewForm/ReviewForm.interface';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>();
  const router = useRouter();
  const {
		register,
		control,
		handleSubmit,
		formState: { errors },
		reset,
  } = useForm<IReviewForm>();
  const goToSearch = () => {
    router.push({
      pathname: '/search',
      query: {
        q: search
      }
    })
  }
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      goToSearch();
    }
  }
  return (
		<div className={cn(className, styles.search)} {...props}>
			<Input
        label='name'
				placeholder="Поиск..."
				register={register}
				required
        message='sdasd'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				className={styles.input}
				onKeyDown={() => handleKeyDown}
			/>

			<Button
				appearence="primary"
				className={styles.button}
				onClick={goToSearch}
			>
				<SearchIcon />
			</Button>
		</div>
  );
};
