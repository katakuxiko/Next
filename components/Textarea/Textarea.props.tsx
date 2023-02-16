import { DetailedHTMLProps, TextareaHTMLAttributes, ReactNode } from 'react';
import { IReviewForm } from '../ReviewForm/ReviewForm.interface';
import { UseFormRegister, Path } from "react-hook-form";
import {FieldError} from 'react-hook-form'


export interface TextareaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  register: UseFormRegister<IReviewForm>;
  label: Path<IReviewForm>;
  required: boolean;
  error?: FieldError;
  message: string;
}