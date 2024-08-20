import React from 'react';
import Header from './Header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='bg-white'>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
