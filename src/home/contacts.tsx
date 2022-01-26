import React from 'react';

import './home-custom.scss';

interface ContactsProps {
  language: string;
  contactEng: string;
  contactRu: string;
}

const Contacts: React.FC<ContactsProps> = ({
  language,
  contactEng,
  contactRu,
}) => {
  return (
    <div className='hero-contacts hero'>
      <div className='hero-body'>
        <div className='content'>
          <div className='hero-contacts__card card u-flex-column u-center bg-gray-000'>
            <div className='card__header'>
              <p className='font-bold px-3 u-text-center'>
                {language === 'English' ? contactEng : contactRu}
              </p>
            </div>
            <div className='content u-center'>
              <p className='px-2'>
                <a
                  href='mailto:3mfhognm5@relay.firefox.com'
                  className='custom-link u u-LR'
                >
                  Email
                </a>
              </p>
              <p className='px-2'>
                <a
                  href='https://t.me/supramodum'
                  className='custom-link u u-LR'
                >
                  Telegram
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
