import React from 'react';
import moment from 'moment';

const Header = () => {
  const date = moment().format('D');
  const month = moment().format('MMMM');
  const year = moment().format('YYYY');
  const day = moment().format('dddd');

  return (
    <div className="p-4 w-full flex justify-between items-center">
      <div className="flex">
        <p className="text-4xl">{date}</p>
        <div className="flex flex-col justify-center ml-2">
          <p className="text-xs uppercase font-semibold">{month}</p>
          <p className="text-xs text-gray-600">{year}</p>
        </div>
      </div>
      <div className="text-sm font-semibold uppercase text-gray-600">{day}</div>
    </div>
  );
};

export default Header;
