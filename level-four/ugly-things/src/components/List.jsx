import React, { useContext } from 'react';
import { UglyThingsContext } from '../uglyThingContext';

function List(props) {
  const { listData } = useContext(UglyThingsContext);

  return <div>List</div>;
}

export default List;
