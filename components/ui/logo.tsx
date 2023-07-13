import Link from 'next/link';
import React from 'react';

import Ashley from '../ashley';

const Logo = ({ className }) => {
  return (
    <Link href={'/'} className={`${className} h-8 w-16 md:h-8 md:w-16`}>
      <Ashley />
    </Link>
  );
};

export default Logo;
