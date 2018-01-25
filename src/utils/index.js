import { news } from './../constants';

export const getRpCategories = () => {
  const categoriesSet = new Set();
  const rpCategories = [];

  news.map(item => categoriesSet.add(item.category));

  categoriesSet.forEach(category =>
    rpCategories.push(category.charAt(0).toUpperCase() + category.slice(1)));


  return rpCategories;
}


export const getRpSources = () => {
  const sourcesSet = new Set();
  const rpCategories = [];

  news.map(item => sourcesSet.add(item.source));

  sourcesSet.forEach(source =>
    rpCategories.push(source.charAt(0).toUpperCase() + source.slice(1)));


  return rpCategories;
}