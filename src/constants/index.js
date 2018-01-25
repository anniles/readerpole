import React from 'react';

import { getRpCategories, getRpSources } from './../utils';

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
    source: 'times',
    actions: 'you add it in wish read',
    category: 'music',
    logo: <FullLogo />,
    image: Bg1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. labore reprehenderit aperiam!',
  },
  {
    id: 2,
    source: 'bbc',
    actions: 'must read this',
    category: 'fashion',
    logo: <FullLogo />,
    image: Bg2,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. labore reprehenderit aperiam!',
  },
  {
    id: 3,
    source: 'times',
    actions: 'it is red',
    category: 'politics',
    logo: <FullLogo />,
    image: Bg3,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. labore reprehenderit aperiam!',
  },
  {
    id: 4,
    source: 'wsj',
    actions: 'not yet red',
    category: 'finanse',
    logo: <FullLogo />,
    image: Bg4,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. labore reprehenderit aperiam!',
  },
  {
    id: 5,
    source: 'Brief.news',
    actions: 'it is red',
    category: 'news',
    logo: <FullLogo />,
    image: Bg5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. labore reprehenderit aperiam!',
  },
  {
    id: 6,
    source: 'The Economist',
    actions: 'your friend said its awesome',
    category: 'economy',
    logo: <FullLogo />,
    image: Bg6,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. labore reprehenderit aperiam!',
  },
  {
    id: 7,
    source: 'bbc',
    actions: 'it is red',
    category: 'politics',
    logo: <FullLogo />,
    image: Bg7,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. labore reprehenderit aperiam!',
  },
  {
    id: 8,
    source: 'The Economist',
    actions: 'it is red',
    category: 'news',
    logo: <FullLogo />,
    image: Bg8,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. labore reprehenderit aperiam!',
  },
];

const rpCategories = getRpCategories();

const rpSources = getRpSources();

console.log(rpCategories);

export const sideMenu = {
  Sources: rpSources,
  Topics: rpCategories,
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