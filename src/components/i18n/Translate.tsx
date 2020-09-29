import React from 'react';
import { Label } from './definitions';
import useTranslation from './useTranslation';

export interface Props {
  label?: Label;
}

export default function Translate({ label }: Props) {
  const translate = useTranslation();
  return <>{label && translate(label)}</>;
}
