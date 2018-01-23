import React from 'react';

import FullLogo from './../components/svg/FullLogo';
import Bg1 from './../images/1.jpg';
import Bg2 from './../images/2.jpg';
import Bg3 from './../images/3.jpg';
import Bg4 from './../images/4.jpg';
import Bg5 from './../images/5.jpg';
import Bg6 from './../images/6.jpg';
import Bg7 from './../images/7.jpg';
import Bg8 from './../images/8.jpg';

export const news = [
  {
    id: 1,
    source: 'test',
    actions: 'you add it in wish read',
    category: 'music',
    logo: <FullLogo />,
    image: Bg1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. labore reprehenderit aperiam!',
  },
  {
    id: 2,
    source: 'test',
    actions: 'must read this',
    category: 'fashion',
    logo: <FullLogo />,
    image: Bg2,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. labore reprehenderit aperiam!',
  },
  {
    id: 3,
    source: 'test',
    actions: 'it is red',
    category: 'politics',
    logo: <FullLogo />,
    image: Bg3,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. labore reprehenderit aperiam!',
  },
  {
    id: 4,
    source: 'test',
    actions: 'not yet red',
    category: 'finanse',
    logo: <FullLogo />,
    image: Bg4,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. labore reprehenderit aperiam!',
  },
  {
    id: 5,
    source: 'test',
    actions: 'it is red',
    category: 'news',
    logo: <FullLogo />,
    image: Bg5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. labore reprehenderit aperiam!',
  },
  {
    id: 6,
    source: 'test',
    actions: 'your friend said its awesome',
    category: 'economy',
    logo: <FullLogo />,
    image: Bg6,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. labore reprehenderit aperiam!',
  },
  {
    id: 7,
    source: 'test',
    actions: 'it is red',
    category: 'politics',
    logo: <FullLogo />,
    image: Bg7,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. labore reprehenderit aperiam!',
  },
  {
    id: 8,
    source: 'test',
    actions: 'it is red',
    category: 'news',
    logo: <FullLogo />,
    image: Bg8,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. labore reprehenderit aperiam!',
  },
];

export const sideMenu = {
  Sources: ['papos', 'fia', 'three'],
  Topics: ['one', 'two', 'three'],
  People: ['one', 'two', 'three'],
};

export const user = {
  username : 'AposVas',
  firstName: 'Apos',
  lastName: 'Vasiliadis',
  avatar: Bg1,
  role: 'reader',
  articles: [2,3,5,8,6],
};