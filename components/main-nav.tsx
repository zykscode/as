'use client';

import { useCycle } from 'framer-motion';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import * as React from 'react';
import type { MainNavItem } from 'types';

import { MobileNav } from '#/components/mobile-nav';

import LargeScreenMenu from './big-menutoggle';
import Clock from './clock';
import { PageSocial } from './PageSocial';
import Logo from './ui/logo';

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <div className="flex justify-between md:w-full">
      <div className="flex items-center gap-4 self-center ">
        <LargeScreenMenu
          isClicked={isOpen}
          toggle={() => toggleOpen()}
          className="h-6 w-6 md:block md:h-8 md:w-8 "
        />
        <Link className="hidden text-lg font-normal md:block " href={'/'}>
          Ashley Okoli
        </Link>
        <Link
          className="hidden text-lg font-normal md:block "
          href={'/contact'}
        >
          Contact
        </Link>
      </div>
      <Logo className={'hidden cursor-pointer self-center md:block '} />

      <nav className="hidden items-center gap-6 md:flex ">
        <PageSocial />
        <Clock />
      </nav>

      <MobileNav
        toggle={() => toggleOpen()}
        items={items!}
        showMobileMenu={isOpen}
      >
        {children}
      </MobileNav>
    </div>
  );
}
