import React, { useState, useEffect } from 'react';
import './App.css';
import MovieRow from './components/movierow';
import MovieFeatured from './components/moviefeatured';
import Header from './components/header';
import tmdb from './tmdb';

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      //pegar toda lista
      let list = await tmdb.getHomeList();
      setMovieList(list);

      //pega o filme em featured 
      let originals = list.filter(i => i.slug === 'originals');
      //gera um numero aleatorio no resultado do filtro 
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      //pega o escolhido 
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);
  //Header
  //Destaque
  //Listas Diversas
  //Rodape
  return (
    <div className='page'>
      <Header black={blackHeader} />

      {featuredData &&
        <MovieFeatured item={featuredData} />
      }


      <section className='lists'>
        {movieList.map((item, key) => (
          <div>
            <MovieRow key={key} title={item.title} items={item.items} />
          </div>
        ))}
      </section>

      <footer>
        <li></li>
        Feito com amor<br />
        Direitos de imagem para NetFlix<br />
        Dados disponibilizados pelo site Themoviedb.org
      </footer>
      {movieList.length <= 0 &&
        <div className='loading'>
          <img src='https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif' alt='Carregando...'></img>
        </div>
      }
    </div>
  )
};