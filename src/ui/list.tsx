import React from 'react';

interface ListProps {
  dataList: React.ReactNodeArray | string[];
}

export const List: React.FC<ListProps> = ({ dataList }) => {
  return (
    <ul>
      {dataList.map((data, index) => (
        <li key={index} className='py-1'>
          {data}
        </li>
      ))}
    </ul>
  );
};
