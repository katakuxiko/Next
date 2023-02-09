import { DetailedHTMLProps, TextareaHTMLAttributes, ReactNode } from 'react';

export interface TextareaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {}