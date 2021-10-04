import React from 'react';
import { Tags, SmallHeading } from '../ui';
import { textCVHeaderEng, textCVHeaderRu } from '../model';

interface SkillsProps {
  language: string;
}
export const Skills: React.FC<SkillsProps> = ({ language }) => {
  return (
    <div className='bg-gray-000'>
      <SmallHeading
        h2={language === 'English' ? textCVHeaderEng.t1 : textCVHeaderRu.t1}
      />
      <div className='u-flex-column'>
        <section>
          <Tags
            tagsInfo={[
              'JavaScript',
              'TypeScript',
              'React',
              'Node.js',
              'Electron.js',
              'Effector.js',
              'Scala.js',
              'Jest',
              'JUnit',
              'Material UI',
              'Tailwind CSS',
              'HTML',
              'CSS/SCSS',
              'CSS-in-JS',
              'DevTools',
              'Webpack & Parcel',
              'Babel',
              'NPM scripts',
              'Russian 🇷🇺',
              'English 🇬🇧',
            ]}
          />
        </section>
      </div>
    </div>
  );
};
