import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import React from 'react';

import { cn } from '#/lib/utils';

const navbarVariants = cva('flex items-center justify-between py-4 px-6', {
  variants: {
    withToggle: {
      true: 'md:justify-end',
      false: 'md:justify-start',
    },
    logoPosition: {
      left: 'md:items-center',
      right: 'md:items-center md:flex-row-reverse',
    },
  },
  defaultVariants: {
    withToggle: false,
    logoPosition: 'left',
  },
});

type NavbarProps = VariantProps<typeof navbarVariants> & {
  logo: StaticImageData;
  hasToggle?: boolean;
  logoRight?: boolean;
  variant?: 'primary' | 'secondary';
  children?: React.ReactNode;
  className?: string;
};

const Navbar: React.FC<NavbarProps> = ({
  className,
  children,
  logo,
  ...props
}) => {
  return (
    <nav className={cn(navbarVariants(props), className)}>
      {props.withToggle && <button>Toggle</button>}
      <div className="flex items-center">
        {props.logoPosition === 'left' && (
          <div className="mr-4 h-12 w-12">
            <Image src={logo} alt="Logo" layout="fill" />
          </div>
        )}
        <div className="hidden md:flex">{children}</div>
        {props.logoPosition === 'right' && (
          <div className="ml-4 h-12 w-12">
            <Image src={logo.src} alt="Logo" layout="fill" />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
