import React, { useState } from 'react';
import './movierow.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const MovieRow = ({ title, items }) => {
    const [scrollX, setScrollX] = useState(-400)
    const handleLeftArrow = () => {
        /*window.innerWidth = devolve a largura da tela*/
        let x = scrollX + Math.round( window.innerWidth / 2);
        if (x > 0) {
            x = 0;
        }    
        setScrollX(x);
    } 

    const handleRightArrow = () => {
        //scrollX atual - a metade da tela
        let x = scrollX - Math.round( window.innerWidth / 2);
        //largura total de acordo com a qtde de itens
        let listW = items.results.length * 150; 
        
        //pega a largura total da tela e 
        //tira 30 do padding direita e 30 do padding esquerdo
        if (( window.innerWidth - listW) > x ) {            
            x = (window.innerWidth - listW) - 60; //padding dire+padding esq
        }
        setScrollX(x);
    }

    return (
        <div className='movierow'>
            <h2> {title} </h2>
            <div className='movierow--left' onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}}/>
            </div>
            <div className='movierow--right' onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>

            <div className='movierow--listarea'>
                <div className='movierow--list' style={{
                    marginLeft : scrollX,
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className='movierow--item'>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
};

export default MovieRow;