/* eslint-disable @next/next/no-img-element */
import React from 'react';

const ServerList = () => {
  return (
    <div className='bg-zinc-800 font-sans select-none z-9999'>
      <div className='pl-5  pb-2 pt-2 w-16'>
        <img alt='discord-logo' src='../images/discord-logo.png'></img>
        <span></span>
      </div>
      <div className='inline-grid grid-cols-12 gap-3 pl-5 pb-2'>
          <img
            className='w-14 rounded-full bg-neutral-700 hover:rounded-2xl hover:bg-indigo-600 hover:ease-in-out'
            src='../images/discord.png'
            alt='server'
          />
        <img
          className='w-14 rounded-full hover:rounded-2xl hover:ease-in-out'
          src='../images/servers/server1.png'
          alt='server'
        />
        <img
          className='w-14 rounded-full hover:rounded-2xl hover:ease-in-out'
          src='../images/servers/server2.png'
          alt='server'
        />
        <img
          className='w-14 rounded-full hover:rounded-2xl hover:ease-in-out'
          src='../images/servers/server3.png'
          alt='server'
        />
        <img
          className='w-14 rounded-full hover:rounded-2xl hover:ease-in-out'
          src='../images/servers/server4.png'
          alt='server'
        />
        <img
          className='w-14 rounded-full bg-neutral-700 hover:rounded-2xl hover:ease-in-out'
          src='../images/servers/server5.png'
          alt='server'
        />
        <img
          className='w-14 rounded-full hover:rounded-2xl hover:ease-in-out'
          src='../images/servers/server6.png'
          alt='server'
        />
        <img
          className='w-14 rounded-full hover:rounded-2xl hover:ease-in-out'
          src='../images/servers/server7.png'
          alt='server'
        />
        <img
          className='w-14 rounded-full bg-neutral-700 hover:rounded-2xl hover:ease-in-out'
          src='../images/servers/server8.png'
          alt='server'
        />
        <img
          className='w-14 rounded-full hover:rounded-2xl hover:ease-in-out'
          src='../images/servers/server9.png'
          alt='server'
        />
        <img
          className='w-14 rounded-full bg-neutral-700 hover:rounded-2xl hover:bg-green-700 hover:ease-in-out'
          src='../images/plus.png'
          alt='server'
        />
        <img
          className='w-14 rounded-full bg-neutral-700 hover:rounded-2xl hover:bg-green-700 hover:ease-in-out'
          src='../images/discover.png'
          alt='server'
        />
      </div>
    </div>
  );
};

export default ServerList;
