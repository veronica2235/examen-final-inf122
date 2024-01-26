"use client"

import Image from "next/image";
import { useEffect , useState } from "react";
import style from "./foto.module.css";
function Foto(){
    const [pokemon,setPokemon]=useState("/vercel.svg");
    const [estado , setEstado]=useState("my pokemon");
    const [habilidades,setHabilidades]=useState("sneasel")
    const url = "https://pokeapi.co/api/v2/pokemon-form/215/";
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{setPokemon(data.sprites.front_default),
            setEstado(data.species.name),
            setHabilidades(data.abilities[0].ability.name)})
    },[]);
    return(
        <div className={style.contenedor}>
            <h1>my pokemon</h1>
            <h2>sneasel</h2>
            <Image src={pokemon} height={300} width={300}/>
        </div>
        
    );
}
export default Foto;