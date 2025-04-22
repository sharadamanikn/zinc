import React, { PropsWithChildren } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const Rootlayout = (props:PropsWithChildren) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        {props.children}
      </body>
    </html>
  );
};

export default Rootlayout;