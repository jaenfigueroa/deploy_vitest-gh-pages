// import img1 from 'bot.jpg'
import img2 from "/bot.jpg"; /* LA MEJOR OPCION ES ESTA FORMA */
// import img3 from './bot.jpg'
import img4 from "/public/bot.jpg";
import img5 from "../public/bot.jpg";
/*  */
// import img6 from 'empresa/bot.jpg'
import img7 from "/empresa/bot.jpg"; /* LA MEJOR OPCION ES ESTA FORMA */
// import img8 from './empresa/bot.jpg'
import img9 from "/public/empresa/bot.jpg";
import img10 from "../public/empresa/bot.jpg";

function App() {
  /* 
  EN LOCAL --> SOLO LAS QDESCOMENTADAS FUNCIONAN
  EN DEPLOY --> SOLO FUNCIONAN LAS QUE DICEN QUE "FUNCIONA EN DEPLOY"
  */

  /* 
  EN CONCLUSIÓN, MEJOR USAR IMPORT PARA LAS IMAGENES, EN VEZ DE PONER LA RUTA DIRECTAMENTE EN EL SRC
  */

  return (
    <>
      {/* <img src={img1} alt='-1' /> */}
      <img src={img2} alt="-2" /> {/* FUNCIONA EN DEPLOY */}
      {/* <img src={img3} alt='-3' /> */}
      <img src={img4} alt="-4" /> {/* FUNCIONA EN DEPLOY */}
      <img src={img5} alt="-5" /> {/* FUNCIONA EN DEPLOY */}
      {/*<img src={img6} alt='-6' /> */}
      <img src={img7} alt="-7" /> {/* FUNCIONA EN DEPLOY */}
      {/* <img src={img8} alt='-8' /> */}
      <img src={img9} alt="-9" /> {/* FUNCIONA EN DEPLOY */}
      <img src={img10} alt="-10" /> {/* FUNCIONA EN DEPLOY */}
      {/*  */}
      <img src="bot.jpg" alt="1" /> {/* FUNCIONA EN DEPLOY */}
      <img src="/bot.jpg" alt="2" /> {/* warnig y te recomienda esto, pero no funciona en deploy */}
      <img src="./bot.jpg" alt="3" /> {/* FUNCIONA EN DEPLOY */}
      <img src="/public/bot.jpg" alt="4" /> {/* warning y recmienda otra forma, , no funciona en deploy */}
      {/*  */}
      <img src="empresa/bot.jpg" alt="5" /> {/* FUNCIONA EN DEPLOY */}
      <img src="/empresa/bot.jpg" alt="6" /> {/* warnig y te recomienda esto, pero no funciona en deploy */}
      <img src="./empresa/bot.jpg" alt="7" /> {/* FUNCIONA EN DEPLOY */}
      <img src="/public/empresa/bot.jpg" alt="8" /> {/* warning y recmienda otra forma , no funciona en deploy*/}
    </>
  );
}

export default App;
