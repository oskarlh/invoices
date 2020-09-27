import React from 'react';

export interface MenuItem {
  text: string;
}

export interface MenuProps {
  items: MenuItem[];
}

export default function Menu({ items }: MenuProps) {
  return (
    <ul>
      {items.map(({ text }, index) => (
        <li key={index}>{text + ';'}</li>
      ))}
    </ul>
  );
}
