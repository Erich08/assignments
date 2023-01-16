import React from 'react';
import friends from '../data';
import Friend from './Friend';

function FriendList() {
  const friendList = friends.map((item) => <Friend {...item} />);

  return <div className='friends--list'>{friendList}</div>;
}

export default FriendList;
