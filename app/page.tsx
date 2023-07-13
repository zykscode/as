import React from 'react';

import { Icons } from '#/components/icons';
// import { ParallaxText } from '#/components/pt';
import { ParallaxText } from '#/components/parrallax';
import ScrollableImage from '#/components/scrollImage';
import { SiteFooter } from '#/components/site-footer';
import SiteHeader from '#/components/ui/header';
import { siteConfig } from '#/config/site';
import home from '#/public/images/home.jpeg';
import img1 from '#/public/images/img1.png';
import img2 from '#/public/images/img2.png';
import img3 from '#/public/images/img4.png';
import top from '#/public/images/top1.jpeg';

type Props = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: Props) => {
  return (
    <>
      <SiteHeader />
      <div className=" flex  flex-col ">
        <main className="container flex min-h-[calc(100vh-5rem)] flex-1 flex-col gap-4 overflow-hidden pt-4">
          <section className="flex max-h-[100vh]  md:h-3/4 ">
            <div className="flex flex-1 flex-col  ">
              <div className="m-auto aspect-[68/100] h-4/5 overflow-hidden  ">
                <ScrollableImage imageUrl={home} alt={''} />
              </div>{' '}
            </div>
            <div className="flex flex-1 flex-col justify-end gap-3 ">
              <div className=" flex h-1/2 flex-col justify-start bg-purple-500">
                <div className="aspect-[89/61]  overflow-hidden ">
                  <ScrollableImage imageUrl={top} alt={''} />
                </div>
              </div>
              <div className="flex h-1/2 flex-row justify-between">
                <div className="m-auto h-full w-1/3  overflow-hidden">
                  <ScrollableImage imageUrl={img1} alt={''} />{' '}
                </div>
                <div className="m-auto h-full w-1/3 overflow-hidden ">
                  <ScrollableImage imageUrl={img2} alt={''} />{' '}
                </div>
                <div className="m-auto h-full w-1/3 overflow-hidden ">
                  <ScrollableImage imageUrl={img3} alt={''} />{' '}
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col  ">
              <div className="m-auto overflow-hidden">
                <ScrollableImage imageUrl={home} alt={''} />
              </div>
            </div>
          </section>
          <div className="text-center text-3xl font-extrabold md:text-7xl">
            <span className="bg-gradient-to-r from-primaryFg to-accentFg bg-clip-text text-transparent">
              Brands worked with
            </span>
          </div>
          <section className="bg-accent">
            <ParallaxText baseVelocity={5}>
              <div className="flex h-8 justify-evenly gap-4 pl-36">
                <Icons.vogue className="h-full fill-primaryFg" />
                <Icons.okayafrica className="h-full fill-primaryFg " />
                <Icons.pgm className="h-full" />
                <Icons.ynaija className="h-full" />
                <Icons.allure className="h-full   fill-red-500" />
                <Icons.bubblegum className="h-full" />
                <Icons.farfetch className="h-full fill-primaryFg " />
              </div>
            </ParallaxText>
            <ParallaxText baseVelocity={-5}>
              <div className="flex h-8 justify-evenly gap-4 pl-36">
                <Icons.vogue className="h-full fill-primaryFg" />
                <Icons.okayafrica className="h-full fill-primaryFg " />
                <Icons.pgm className="h-full" />
                <Icons.ynaija className="h-full" />
                <Icons.allure className="h-full   fill-red-500" />
                <Icons.bubblegum className="h-full" />
                <Icons.farfetch className="h-full fill-primaryFg " />
              </div>
            </ParallaxText>
          </section>
        </main>
      </div>
      <SiteFooter links={siteConfig.links} />
    </>
  );
};

export default PageLayout;
