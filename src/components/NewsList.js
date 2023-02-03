// @ts-nocheck
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import NewsItem from './NewsItem'


const NewsItemBlock = styled.div`
box-sizing:border-box;
padding-bottom:3rem;
width:768;
margin:0 auto;
margin-top : 2rem;
@media screen and (max-width:768px){
  width:100%;
  padding-left : 1rem;
  padding-right : 1rem;
}
`;


const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const query = category === 'all' ? '' : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=76a964e9c7f14d39a49090cc6f8c7fab`,
        );
        setArticles(response.data.articles);
        console.log("response.data.articles", response.data.articles)
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  //대기중일 때
  if (loading) {
    return <NewsItemBlock>대기중...</NewsItemBlock>
  }
  //아직 articels값이 설정되지 않았을 때
  if (!articles) {
    return null;
  }

  //articles값이 유효할 때
  return (
    <NewsItemBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsItemBlock>
  );
};


export default NewsList
