import React from 'react';

const numbers = [1, 2, 3, 4, 5, 6, 7];
const listItems = numbers.map(number =>
    <li>{number}</li>
    );

const listElem = <ul>{listItems}</ul>

export default listElem;