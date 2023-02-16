import { ReviewFormProps } from "./ReviewForm.props";
import styles from "./ReviewForm.module.css";
import CloseIcon from "./close.svg";
import cn from "classnames";
// import { Input } from "../Input/Input";
// import { Textarea } from "../Textarea/Textarea";
import { Button } from "../Button/Button";
import { useForm, Controller } from "react-hook-form";
import { IReviewForm } from "./ReviewForm.interface";
import Rating from "../Rating/Rating";
import { InputProps } from "../Input/Input.props";
import { TextareaProps } from "../Textarea/Textarea.props";
import { forwardRef } from "react";

export const ReviewForm = ({
  productId,
  className,
  ...props
}: ReviewFormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IReviewForm>();

  const onSubmit = (data: IReviewForm) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input
          label="name"
          register={register}
          required
          placeholder="Имя"
          message="Заполните имя"
          error={errors.name}
        />

        <Input
          label="title"
          register={register}
          required={true}
          error={errors.title}
          message="Заполните заголовок"
          placeholder="Заголовок отзыва"
          className={styles.title}
        />
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Controller
            control={control}
            name="rating"
            rules={{required:{value:true,message:'Поставьте оценку'}}}
            render={({ field }) => (
              <>
              <Rating
                isEditable
                rating={field.value}
                setRating={field.onChange}
                error={errors.rating}
              />
              </>
            )}
          />
        </div>
        <Textarea
          message="Заполните поле"
          error={errors.description}
          register={register}
          label={"description"}
          required={true}
          placeholder="Текст отзыва"
          className={styles.description}
        />
        <div className={styles.submit}>
          <Button appearence="primary">Отправить</Button>
          <span className={styles.info}>
            * Перед публикацией отзыв пройдет предварительную модерацию и
            проверку
          </span>
        </div>
      </div>
      <div className={styles.success}>
        <div className={styles.successTitle}>Ваш отзыв отправлен</div>
        <div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
        <CloseIcon className={styles.close} />
      </div>
    </form>
  );
};

const Input = ({
  className,
  label,
  required,
  register,
  message,
  error,
  ...props
}: InputProps): JSX.Element => {
  return (
    <div className={styles.inputWrapper}>
      <input
        {...register(label, {
          required: { value: required, message: message },
        })}
        className={cn(className, styles.input, {
          [styles.error]: error,
        })}
        {...props}
      />
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
};

const Textarea = ({
  className,
  register,
  required,
  label,
  message,
  error,
  ...props
}: TextareaProps): JSX.Element => {
  return (
    <div className={cn(className, styles.inputWrapper)}>
      <textarea
        {...register(label, {
          required: { value: required, message: message },
        })}
        className={cn(styles.textarea, {
          [styles.error]: error,
        })}
        {...props}
      />
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
};
