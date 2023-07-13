import React from 'react';

import { Icons } from '#/components/icons';
import { ParallaxText } from '#/components/parrallax';

// import Canvas from '#/components/particle';

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="relative flex min-h-screen flex-col justify-center ">
      {/* <Canvas /> */}
      <div className="fixed top-[50vh] ">
        <ParallaxText baseVelocity={4}>
          <div className="flex justify-self-center p-4">
            <Icons.pgm className="h-8" />
            <Icons.allure className="h-8   fill-red-500" />
            <Icons.farfetch className="mt-1 h-8 fill-primary " />
            <Icons.okayafrica className="mt-1 h-8 fill-primary " />
          </div>{' '}
        </ParallaxText>
        <ParallaxText baseVelocity={-4}>
          <div className="flex gap-4  justify-self-center p-4">
            <Icons.pgm className="h-8" />
            <Icons.allure className="h-8   fill-red-500" />
            <Icons.farfetch className="mt-1 h-8 fill-primary " />
            <Icons.okayafrica className="mt-1 h-8 fill-primary " />
          </div>
        </ParallaxText>
      </div>
      <div className=" min-h-screen">
        <h1>yellow</h1>
      </div>
      <div className=" min-h-screen">
        <h1>yellow</h1>
      </div>
      <div className=" min-h-screen">
        <h1>yellow</h1>
      </div>
      <div className=" min-h-screen">
        <h1>yellow</h1>
      </div>
    </div>
  );
};

export default Page;
