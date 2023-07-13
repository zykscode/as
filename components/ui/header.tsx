'use client';

import React from 'react';

import { homepageNavs } from '#/config/homepage';

import { MainNav } from '../main-nav';
import Logo from './logo';

function SiteHeader() {
  return (
    <header className="container sticky top-0 z-40 bg-primaryFg text-primary  backdrop-blur-sm 2xl:max-w-full">
      <div className="flex h-12 justify-between border-b-slate-200 md:flex-row-reverse ">
        <MainNav items={homepageNavs.mainNav} />
        <Logo className={'self-center justify-self-center md:hidden'} />
      </div>
    </header>
  );
}

export default SiteHeader;
