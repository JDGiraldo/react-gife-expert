import { useState, useEffect } from "react";
import { GifItem } from "./GifItem";
// import { getGifts } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";

export default function GifGrid({category}) {

    const {images,isLoading} = useFetchGifs(category); 
   
    return (
    <>
        <h3>{ category }</h3> 
        {
            isLoading && <h2>Cargando...</h2>
        }
        <div className="card-grid">
            {
                images.map( (image) =>(
                    
                   <GifItem 
                   key={image.id}
                   image = { image }
                   { ...image }
                   />
                ))
            }
        </div>    
    
    </>
     )
}
