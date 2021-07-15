import React from 'react';

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
    <div
      className='hero bg-gray-200'
      style={{
        height: '600px',
        backgroundImage:
          'radial-gradient(rgba(15,98,254) 1px, rgba(15,98,254, .05) 0)',
        backgroundSize: '22px 22px',
        backgroundPosition: 'center',
      }}
    >
      <div className='hero-body'>
        <div className='content'>
          <div
            className='card u-flex-column u-center bg-gray-000'
            style={{
              boxShadow: 'rgba(16,98,254, .7) 0px 20px 30px',
              maxWidth: '600px',
              height: '300px',
            }}
          >
            <div className='card__header'>
              <p className='font-bold px-3 u-text-center'>
                {language === 'English' ? contactEng : contactRu}
              </p>
            </div>
            <div className='content u-center'>
              <p className='px-2'>
                <a
                  href='mailto:3mfhognm5@relay.firefox.com'
                  className='u u-LR'
                  style={{ color: 'rgba(15,98,254)' }}
                >
                  Email
                </a>
              </p>
              <p className='px-2'>
                <a
                  href='https://t.me/supramodum'
                  className='u u-LR'
                  style={{ color: 'rgba(15,98,254)' }}
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
