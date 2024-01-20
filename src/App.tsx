// import img1 from 'bot.jpg'
import img2 from '/bot.jpg'
// import img3 from './bot.jpg'
import img4 from '/public/bot.jpg'
import img5 from '../public/bot.jpg'
/*  */
// import img6 from 'empresa/bot.jpg'
import img7 from '/empresa/bot.jpg'
// import img8 from './empresa/bot.jpg'
import img9 from '/public/empresa/bot.jpg'
import img10 from '../public/empresa/bot.jpg'

function App() {
  /* 
  EN LOCAL --> SOLO LAS QDESCOMENTADAS FUNCIONAN
  EN DEPLOY --> SOLO FUNCIONAN LAS QUE DICEN QUE "FUNCIONA EN DEPLOY"
  */
  return (
    <>
      {/* <img src={img1} alt='-1' /> */}
      <img src={img2} alt='-2' /> {/* FUNCIONA EN DEPLOY */}
      {/* <img src={img3} alt='-3' /> */}
      <img src={img4} alt='-4' /> {/* FUNCIONA EN DEPLOY */}
      <img src={img5} alt='-5' /> {/* FUNCIONA EN DEPLOY */}
      {/*<img src={img6} alt='-6' /> */}
      <img src={img7} alt='-7' /> {/* FUNCIONA EN DEPLOY */}
      {/* <img src={img8} alt='-8' /> */}
      <img src={img9} alt='-9' /> {/* FUNCIONA EN DEPLOY */}
      <img src={img10} alt='-10' /> {/* FUNCIONA EN DEPLOY */}
      {/*  */}
      <img src='bot.jpg' alt='1' /> {/* FUNCIONA EN DEPLOY */}
      <img src='/bot.jpg' alt='2' />
      <img src='./bot.jpg' alt='3' /> {/* FUNCIONA EN DEPLOY */}
      <img src='/public/bot.jpg' alt='4' />
      {/*  */}
      <img src='empresa/bot.jpg' alt='5' /> {/* FUNCIONA EN DEPLOY */}
      <img src='/empresa/bot.jpg' alt='6' />
      <img src='./empresa/bot.jpg' alt='7' /> {/* FUNCIONA EN DEPLOY */}
      <img src='/public/empresa/bot.jpg' alt='8' />
    </>
  )
}

export default App
