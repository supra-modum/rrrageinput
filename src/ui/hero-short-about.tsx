import React from 'react';

import { ParagraphLead } from './paragraph-lead';

interface HeroShortAboutProps {
  language: string;
  pEng: string[];
  pRu: string[];
}

export const HeroShortAbout: React.FC<HeroShortAboutProps> = ({
  language,
  pEng,
  pRu,
}) => {
  return (
    <div className='hero fullscreen'>
      <div className='hero-body'>
        <div className='mx-auto'>
          <div className='content'>
            {language === 'English' ? (
              <ParagraphLead data={pEng} isLead />
            ) : (
              <ParagraphLead data={pRu} isLead />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
