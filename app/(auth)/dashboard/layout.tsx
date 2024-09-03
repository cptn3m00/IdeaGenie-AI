'use client';
import React, { useState } from 'react';
import Sidenav from './_components/sidenav';
import Header from './_components/header';
import { TotalUsageContext } from '../(context)/TotalUsageContext';
import { UpdaCreditUsageContext } from '../(context)/updateCreditUsageContext';

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [totalUsage, setTotalUsage] = useState<Number>(0);
  const [updateCreditUsage,setUpdateCreditUsage]=useState<any>()

  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      <UpdaCreditUsageContext.Provider value={{updateCreditUsage,setUpdateCreditUsage}}>
      <div className='bg-slate-200 min-h-screen'>
        <div className='md:w-64 hidden md:block fixed'>
          <Sidenav />
        </div>
        <div className='md:ml-64'>
          <Header />
          {children}
        </div>
      </div>
      </UpdaCreditUsageContext.Provider>
    </TotalUsageContext.Provider>
  );
}

export default Layout;
