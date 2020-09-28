import React, { ComponentType } from 'react';
import { Label } from './definitions';
import useTranslation from './useTranslation';

export interface TranslationProps {
  translate: (label: Label) => string;
}

type WithoutTranslationProps<Props> = Omit<Props, 'translate'>;

export default function withTranslation<
  ComponentProps extends TranslationProps
>(
  Component: ComponentType<ComponentProps>
): ComponentType<WithoutTranslationProps<ComponentProps>> {
  return (props: WithoutTranslationProps<ComponentProps>) => {
    const translate = useTranslation();
    return <Component {...(props as any)} translate={translate} />;
  };
}
