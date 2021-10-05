import { useStore } from 'effector-react';
import React from 'react';

import { $language, textMainPageEng, textMainPageRu } from '../model';

import './custom.scss';

const HeroMain: React.FC = () => {
  const language = useStore($language);

  return (
    <div className="hero-main hero fullscreen u-unselectable">
      <div className="hero-body">
        <div className="p-2 u-center">
          <div className="u-flex-column">
            {language === 'English' ? (
              <div className="u-flex-column">
                <div className="u-flex-column">
                  <h2 className="hero-main__heading white">
                    {textMainPageEng.t1}
                  </h2>
                </div>
                <div className="u-flex-column">
                  <h2 className="hero-main__heading white">
                    {textMainPageEng.t2}
                  </h2>
                </div>
              </div>
            ) : (
              <>
                <div className="u-flex-column">
                  <h2 className="hero-main__heading white">
                    {textMainPageRu.t1}
                  </h2>
                </div>
                <div className="u-flex-column">
                  <h2 className="hero-main__heading white">
                    {textMainPageRu.t2}
                  </h2>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
