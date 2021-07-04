import React from 'react';

import { Tags } from './tags';

export const HeroCV: React.FC = () => {
  return (
    <div
      className='hero fullscreen u-unselectable mb-2'
      style={{
        background:
          'linear-gradient(to right, rgb(142, 45, 226), rgb(74, 0, 224))',
      }}
    >
      <div className='hero-body'>
        <div className='mx-auto'>
          <div className='p-2'>
            <h1 className='white'>Work experience 👩🏻‍💻</h1>
          </div>
          <div className='p-2'>
            <h3 className='white'>Skills:</h3>
            <Tags
              tagsInfo={[
                'TypeScript',
                'React',
                'Node.js',
                'Scala.js',
                'Effector.js',
                'Jest & JUnit',
                'Scala',
              ]}
            />
            <Tags
              tagsInfo={['Tailwind CSS', 'Sass', 'Bootstrap', 'Material UI']}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
