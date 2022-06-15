import * as React from 'react';
import 'cirrus-ui';
import './ui-custom.scss';
import { useEffect } from "react";

export const Toast = () => {
  const [open, setOpen] = React.useState(true);
  const closeToast = () => setOpen(!open);

  useEffect(() => {
    setOpen(open)
  }, [open])

  return open ? (
    <div
      className='toast u-fixed u-z-50 m-0 animated fadeIn'
      style={{
        bottom: 0,
        backgroundImage:
          'linear-gradient(to bottom, rgba(41, 114, 250, 1), rgba(250, 202, 21, 1))',
        border: 'none',
      }}
    >
      <button className='btn-close' onClick={closeToast} />
      <h4 className='toast__title'>Glory to Ukraine! 🇺🇦</h4>
      <a href='https://www.comebackalive.in.ua/donate' target='_blank'>
        comebackalive.in.ua/donate
      </a>
    </div>
  ) : null;
};
