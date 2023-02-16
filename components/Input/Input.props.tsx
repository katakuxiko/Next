import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { Path, UseFormRegister } from "react-hook-form";
import { IReviewForm } from '../ReviewForm/ReviewForm.interface';
import {FieldError} from 'react-hook-form'

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  register: UseFormRegister<IReviewForm>;
  label: Path<IReviewForm>;
  required: boolean;
  message: string;
  error?: FieldError;
}