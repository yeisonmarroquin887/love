import { useEffect, useState } from "react";
import Button from "./Button";
import "./phrase.css";

const Phrase = ({ Phrases, clickButton, moneyRandon, image }) => {
  const styleButton = {
    backgroundImage: moneyRandon,
  };

  const [song, setsong] = useState(1)
  useEffect(() => {
    // Este código se ejecutará cada vez que song cambie
    document.getElementById('reproductor').load();
    document.getElementById('reproductor').play();

  }, [song]);
 console.log(song)
  const adelantar = () => {
    if(song > 0 && song < 10){
      setsong(song + 1)
    }
  }
  const Atrasar = () => {
   if(song > 1){
    setsong(song - 1)
   }
  }


  return (
    <div className="padre">

      <div className="phrase">
        
      <div id="audio-container">
  <audio controls autoplay id="reproductor" style={{ width: '', height: "1.5em" }}>
    <source src={`./auds/au${song}.mp3`} type="audio/mp3" />
  </audio>
</div>

        <div>
            <button onClick={Atrasar}>Anterior</button>
             <button>❤️Te amo❤️</button>
            <button onClick={adelantar}>Siguiente</button>
          </div>
        <figure className="phrase_image">
          <img src={`./backgraouds/fondo${image}.png`} alt="" />
        </figure>

        <div className="phrase_title">
          <h1 id="tittle">
            Mi morenita te amo demaciado
            Felices 4 meses amor <br />
            ❤️❤️❤️
          </h1>
        </div>

        <div className="phrase_text">
          <p className="phrases">{Phrases.phrase}</p>
          <p className="Phrases_Autor">
            <b>{Phrases.author}</b>
          </p>
          <Button clickButton={clickButton} styleButton={styleButton} />
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Phrase;
