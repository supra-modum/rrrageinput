import React from 'react';

interface ListProps {
  dataList: React.ReactNode[];
}

export const List: React.FC<ListProps> = ({ dataList }) => {
  return (
    <ul>
      {dataList.map((data, index) => (
        <li key={index}>{data}</li>
      ))}
    </ul>
  );
};
