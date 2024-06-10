/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({  category }) => {

  const [articel, setArticel] = useState([])
  const [show, setShow] = useState(false)

  const fetchData = async (url) => {
    const response = await fetch(url)
    const result = await response.json()
    setArticel(result.articles)
  }

  useEffect(() => {
    let URL = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
    fetchData(URL)
    setShow(true)
  }, [category])

  return (
    <>
      <h2 className="h2 text-center">Latest <span className="badge bg-danger my-3">News</span></h2>
      {
        show ? articel.map((news, index) => {
          return (
            <>
              <NewsItem key={index}
                title={news.title}
                description={news.description}
                src={news.urlToImage}
                url={news.url} />
            </>
          )
        }) : ' '
      }
    </>
  )
};

export default NewsBoard;
