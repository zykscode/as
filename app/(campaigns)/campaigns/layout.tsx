import React, { Children } from 'react';

interface Props {
    children?: React.ReactNode
  }
  

export default async function CampaignLayout({children}: Props) {
  return <div>{children}</div>;
}

