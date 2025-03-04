import React from "react";
import Navbar from "../components/navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className='w-full'>
        <Navbar />
      </div>
      <main className='pt-8 px-6'>{children}</main>
    </>
  );
};

export default Layout;
