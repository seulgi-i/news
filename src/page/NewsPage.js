import React from 'react'
import { useParams } from 'react-router-dom';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';
const NewsPage = () => {
  const { category } = useParams() || 'all';
  //카테고리가 선택되지 않았으면 기본값 all로 사용
  return (
    <div>
      <Categories />
      <NewsList category={category} />
    </div>
  )
}

export default NewsPage
