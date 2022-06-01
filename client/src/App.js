import { click } from '@testing-library/user-event/dist/click';
import React, {useState, useEffect} from 'react';
import './App.css';

import Counter from './components/Counter';
import Login from './components/LoginPage';
import Condition from './components/Condition';
import Movie from './components/Movie';
import ProductInfo from './components/ProductInfo';
import NavBar from './components/NavBar';
import MainImage from './components/MainImage';

function App() {
  const [count, setCount] = useState(0);

  const [movieTitle, setMovieTitle] = useState('');
  const [movieYear, setMovieYear] = useState('');

  const [movies, setMovies] = useState(
    [
      {title: "별헤는밤", year: 2020},
      {title: "귀곡성", year: 2019},
      {title: "7번방의 기적", year: 2030},
      {title: "범죄도시", year: 2034}
    ]
  );

  // 아래와 같이 useEffect 함수를 이용하면, 원하는 변수의 state에 따라서만
  // useEffect의 인자로 받은 함수를 실행한다.
  useEffect(() => {
    console.log(count);
  }, [count]);
  console.log('rendering');

  const renderMovies = movies.map(movie => {
    return (
      <Movie movie={movie} key={movie.title}/>
    )
  });

  // function which add movie to movie list
  const addMovie = (event) => {
    event.preventDefault();
    // push movie to movie list
    // ...: 구조 분해 할당, 대괄호를 벗기고 안의 내용만 넣어주는 연산자의 역할
    setMovies([
      ...movies,
      {
        title: movieTitle, 
        year: movieYear
      }
    ]);
    // reset title and year variables.
    setMovieTitle('');
    setMovieYear('');
  };

  return (
    <div className="App">
      <NavBar />
      {/*<form onSubmit={addMovie}>
        <input
          type="text"
          value={movieTitle}
          placeholder="영화 제목"
          onChange={e => setMovieTitle(e.target.value)}
        /> <br />
        <input
          type="text"
          value={movieYear}
          placeholder="개봉 년도"
          onChange={e => setMovieYear(e.target.value)}
        /> <br />
        <button>영화 추가</button>
      </form>
      */}
      <MainImage imageSrc="./images/background1.png" />

      <div className="productList">
        <ProductInfo imageLink="./images/logo192.png" productName="samsung" date="2022/04/05" />
        <ProductInfo imageLink="./images/logo192.png" productName="apple" date="2001/03/01" /> 
        <ProductInfo imageLink="./images/logo192.png" productName="korea" date="2021/03/01" />
        <ProductInfo imageLink="./images/logo192.png" productName="korea" date="2021/03/01" />       
      </div>
    </div>
  );
}

// 다른 곳에서 import 해서 사용하기 위해서 export 해줘야 한다.
export default App;