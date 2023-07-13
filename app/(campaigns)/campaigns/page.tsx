import React from 'react';

import GoldenRatio from '#/components/ui/g-ratio';

type Props = {};

const Page = (props: Props) => {
  return (
    <div className=" min-h-screen overflow-hidden">
      <GoldenRatio num={6}>
        <h1>hey</h1>
      </GoldenRatio>
    </div>
  );
};

export default Page;
