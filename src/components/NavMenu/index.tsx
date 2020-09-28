import React, { ReactNode } from 'react';

export interface MenuItem {
  content: ReactNode;
  onClick?: (menuItem: MenuItem) => {};
}

export interface Props {
  items: MenuItem[];
  onClick?: (menuItem: MenuItem) => {};
}

export default function Menu({ items }: Props) {
  return (
    <nav>
      <ul>
        {items.map(({ content }, index) => (
          <li key={index}>{content}</li>
        ))}
      </ul>
    </nav>
  );
}
