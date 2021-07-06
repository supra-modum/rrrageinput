import React from 'react';

interface MarkProps {
  markBackgroundStyle?: boolean;
}

export const MarkComponent: React.FC<MarkProps> = ({
  children,
  markBackgroundStyle = false,
}) => {
  return markBackgroundStyle ? (
    <mark
      style={{ backgroundColor: 'rgba(16,98,254)' }}
      className='u-round white'
    >
      {children}
    </mark>
  ) : (
    <i style={{ color: 'rgba(16,98,254)' }}>{children}</i>
  );
};
