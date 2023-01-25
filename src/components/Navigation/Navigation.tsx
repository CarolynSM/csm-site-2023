import React from 'react';
import './Navigation.css';

type MenuItemsProps = {
  items: { name: string; title: string, displayContent: JSX.Element }[];
  onClick: (name: string) => void;
};

const MenuItems = ({ items, onClick }: MenuItemsProps) => (
  <>
    {items.map((i) => {
      if(i.name=== 'home') {
        return null
      } 
      return (
          // eslint-disable-next-line react/button-has-type
          <button key={i.name} onClick={() => onClick(i.name)} onKeyDown={() => onClick(i.name)}>
          {i.title}
        </button>
      )
    })}
  </>
);

type NavigationProps = {
  title: string;
  sections: { name: string; title: string, displayContent: JSX.Element  }[];
  onClick: (name: string) => void;
};

export const Navigation = ({ title, sections, onClick }: NavigationProps) => (
  <div className="navigation-container">
    {/* eslint-disable-next-line react/button-has-type */}
    <div className="logo-container">
      <button 
        className="title" 
        onClick={() => onClick('home')} 
        onKeyDown={() => onClick('home')}
        >
          {title}
      </button>
    </div>
    <div className="menu">
      <MenuItems items={sections} onClick={onClick} />
    </div>
  </div>
);
