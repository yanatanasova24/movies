import React, {FC, PropsWithChildren} from 'react';

interface IProps extends PropsWithChildren{
    poster_path:string,
    original_title:string
}

const Poster:FC<IProps> = ({poster_path, original_title}) => {

    const posterLink = `http://image.tmdb.org/t/p/w300${poster_path}`

    return (
        <div>
            <img src={posterLink} alt={original_title}/>
        </div>
    );
};

export {Poster};