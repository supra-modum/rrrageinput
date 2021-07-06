import React from 'react';
import { SmallHeading } from './small-heading';
import { ParagraphLead } from './paragraph-lead';

interface CardJobProps {
  headingH4: string;
  headingH5: string;
  headingSubtitle: React.ReactNode | string;
  about: string[];
  listData?: React.ReactNode[] | string[];
}

export const CardJob: React.FC<CardJobProps> = ({
  headingH4,
  headingH5,
  headingSubtitle,
  about,
  children,
}) => {
  return (
    <div className='u-relative py-6'>
      <SmallHeading h4={headingH4} h5={headingH5} children={headingSubtitle} />
      <div
        className='u-overflow-auto py-4'
        style={{
          maxHeight: '600px',
        }}
      >
        <div className='px-4'>
          <ParagraphLead data={about} isLead={false} />
          {children}
        </div>
      </div>
    </div>
  );
};
