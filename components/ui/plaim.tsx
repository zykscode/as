'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import React from 'react';

import { siteConfig } from '#/config/site';
import { useLockBody } from '#/hooks/use-lock-body';
import { cn } from '#/lib/utils';
import type { MainNavItem } from '#/types';

import { Icons } from '../icons';

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

function Navbar({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  useLockBody();
  return (
    <header className="container sticky top-0 z-40 bg-white">
      <div className="flex h-16 items-center justify-between border-b border-b-slate-200 py-4">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="hidden items-center space-x-2 md:flex">
            <Icons.logo />
            <span className="hidden font-bold sm:inline-block">
              {siteConfig.name}
            </span>
          </Link>
          {items?.length ? (
            <nav className="hidden gap-6 md:flex">
              {items?.map((item, index) => (
                <Link
                  key={index}
                  href={item.disabled ? '#' : item.href}
                  className={cn(
                    'flex items-center text-lg font-semibold text-slate-600 sm:text-sm',
                    item.href.startsWith(`/${segment}`) && 'text-slate-900',
                    item.disabled && 'cursor-not-allowed opacity-80',
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          ) : null}
          <button
            className="flex items-center space-x-2 md:hidden"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? <Icons.close /> : <Icons.logo />}
            <span className="font-bold">Menus</span>
          </button>
          {showMobileMenu && items && (
            <div
              className={cn(
                'fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden',
              )}
            >
              <div className="relative z-20 grid gap-6 rounded-md bg-white p-4 shadow-md">
                <Link href="/" className="flex items-center space-x-2">
                  <Icons.logo />
                  <span className="font-bold">{siteConfig.name}</span>
                </Link>
                <nav className="grid grid-flow-row auto-rows-max text-sm">
                  {items.map((item, index) => (
                    <Link
                      key={index}
                      href={item.disabled ? '#' : item.href}
                      className={cn(
                        'flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline',
                        item.disabled && 'cursor-not-allowed opacity-60',
                      )}
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>
                {children}
              </div>
            </div>
          )}
        </div>{' '}
        <nav>
          <Link href="/login">Lo,,,,,gin</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
