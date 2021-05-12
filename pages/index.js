import Head from 'next/head'
import Image from 'next/image'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import axios from 'axios';
import { getUrl } from '../services/getUrl';

export default function Home() {

console.log(process.env.NODE_ENV);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    message: false
  })

  const handleSendEmail = () => {
    let errors = {
      name: false,
      email: false,
      phone: false,
      message: false
    }
    let errorArray = [];
    if (formData.name.length < 1) {
      errors.name = true;
      errorArray.push(1);
    }
    if (formData.email.length < 1 || !formData.email.includes('@')) {
      errors.email = true;
      errorArray.push(1);
    }
    if (formData.phone.length < 1) {
      errors.phone = true;
      errorArray.push(1);
    }
    if (formData.message.length < 1) {
      errors.message = true;
      errorArray.push(1);
    }
    setErrors(errors);

    if (errorArray.length < 1) {
      axios.post(`${getUrl()}/sendmail`)
      .then(res => console.log(res.data));
    }
  }

  return (
    <div>
      <Head>
        <title>Miltelinis dažymas Pilviškiuose</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <header>
          <div className='wrapper'>
            <div className='logo'>
              <img src='https://res.cloudinary.com/dxdmya6ui/image/upload/v1620821646/dazymas_logo_6e09740273.png?1246483.9150000007' />
            </div>
            <ul>
              <li>APIE MUS</li>
              <li>PASLAUGOS</li>
              <li>GALERIJA</li>
              <li>KONTAKTAI</li>
            </ul>
          </div>
        </header>
        <section className='hero-bg' style={{'background-image': `url('https://res.cloudinary.com/dxdmya6ui/image/upload/v1620808395/hero_image_4b319b1b12.jpg?101781.61499999987')`}}>
          <div className='wrapper'>
            <div className='left'>
              <div className='flex-center'>
                <h2>Miltelinis dažymas</h2>
                <span>Pilviškiuose</span>
              </div>
            </div>
            <div className='right'>
              <div className='flex-center'>
                <p>Jei jums reikia ekspertų miltelinio dažymo srityje - mes galime padėti</p>
                <button>Susisiekti</button>
              </div>
            </div>
          </div>
        </section>
        <section className='about-us'>
          <div className='wrapper'>
            <div className='left'>
              <h2><img src='https://res.cloudinary.com/dxdmya6ui/image/upload/v1620810788/Daco_2373189_83aa6a1bda.png?93325.09000000027' />Apie mus</h2>
            </div>
            <div className='right'>
            <p>
            UAB "Miltelinis dažymas Pilviškiuose" veiklą atlieka gamykloje, esančioje Kretingoje. Šioje pramonėje esame sukaupę didelę patirtį, o ją sukaupėme klientams suteikdami aukščiausios klasės kompetentingas paslaugas už prieinamą kainą.
            </p>
            <p>
              Mūsų įmonė naudoja pažangią apdailos technologiją, kuri skirta nudažyti įvairiausioms dalims, medžiagoms ir produktams, naudojamiems įvairiose pramonės šakose.
            </p>
            </div>
          </div>
        </section>
        <section className='about-us orange-bg'>
          <div className='wrapper row-reverse'>
            <div className='left'>
              <h2><img src='https://res.cloudinary.com/dxdmya6ui/image/upload/v1620812848/painter_8b32ec125d.png?2150974.9950000006' />Paslaugos</h2>
            </div>
            <div className='right color-white'>
            <p>
            Proceso metu padengiame gaminį dekoratyvine ir apsaugine danga. Tokiu būdu gaminys apsaugomas nuo karščio, šalčio, braižymo, korozijos, balimo ir kitų oro 
            sąlygų poveikio. Miltelinio dažymo paslaugas  teikiame  įmonėms, kurios  užsiima gamyba  iš juodojo metalo, cinkuoto metalo, aliuminio, švino, vario, nerūdijančio plieno ir kitų metalų.
            </p>
            <p>
            Taip pat  apdirbame  ir  milteliniu  būdu  dažome stambiagabaritines detales (konstrukcijas): plieno lakštus, sijas; bei kitas detales.  Tai ypač aktualu įmonėms,  dirbančioms statybos,  metalo, statybos  medžiagų,  sodo  reikmenų  ir su  tuo  susijusiuose  sektoriuose.
            </p>
            </div>
          </div>
        </section>
        <section className='why-us'>
          <h2>Kodėl rinktis mus?</h2>
          <div className='wrapper'>
            <div className='item'>
              <img src='https://res.cloudinary.com/dxdmya6ui/image/upload/v1620814203/quality_1a7b9f8259.svg?30002.050000000963' />
              <h3>Kokybė</h3>
              <p>Mes galime Jums pasiūlyti itin kokybiškas dengimo paslaugas. Nuo miltelinio dažymo iki dažymo purškiant, galime užtikrinti, kad gaminio paviršius išliks patvarus ir atsparus korozijai.</p>
            </div>
            <div className='item'>
              <img src='https://res.cloudinary.com/dxdmya6ui/image/upload/v1620814319/innovation_f6f17129e2.svg?127764.25500000005' />
              <h3>Inovatyvumas</h3>
              <p>Įmonė  naudoja visiškai  naują, modernią įrangą, inovatyvią miltelinio  dažymo  rinkos  mastu, kuri užtikrina ergonomišką, kokybišką, draugišką aplinkai gamybinių paslaugų teikimą, leidžiančią taupyti žaliavas, elektros energiją bei žmogiškuosius resursus, sudarant sąlygas  aukštai darbų saugai, našesnei gamybai bei puikias  sąlygas dirbantiesiems.</p>
            </div>
            <div className='item'>
              <img src='https://res.cloudinary.com/dxdmya6ui/image/upload/v1620814464/price_tag_dc5b495518.svg?271084.12000000133' />
              <h3>Prieinama kaina</h3>
              <p>Mes garantuojame, kad už atliktas paslaugas nepermokėsite.</p>
            </div>
          </div>
        </section>
        <section className='contact'>
          <h3>Kontaktai</h3>
          <div className='wrapper'>
            <div className='text'>
            <p className='find-us-text'>Įmonė</p>
              <p className='content'>
                UAB "Miltelinis dažymas Pilviškiuose"<br />
                Įmonės kodas: 304998962
              </p>
            <p className='find-us-text'>Telefonas</p>
              <p className='content'>
              861036444
              </p>
              <p className='find-us-text'>El. paštas</p>
              <p className='content'>
              miltelinisdp@gmail.com
              </p>
              <p className='find-us-text'>Raskite mus žemėlapyje</p>
              <p className='content'>
                <b>Adresas: </b>Klaipėdos  g. 127, Kretinga
              </p>
            </div>
            <div className='map'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2238.5148128096175!2d21.22144431590551!3d55.87108398058511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e5268d77bdef8b%3A0xff7ae6c3748811a9!2sKlaip%C4%97dos%20g.%20127%2C%20Kretinga%2097155!5e0!3m2!1sen!2slt!4v1620815192256!5m2!1sen!2slt" 
                allowfullscreen="" 
                loading="lazy"
              >

              </iframe>
            </div>
          </div>
            <h3>Parašykite mums</h3>
            <div className='form-row'>
              <TextField error={errors.name} id="filled-basic" onChange={(e) => setFormData({...formData, name: e.target.value})} label="Vardas" variant="filled" />
              <TextField error={errors.email} id="filled-basic" onChange={(e) => setFormData({...formData, email: e.target.value})} label="El. pašto adresas" variant="filled" />
              <TextField error={errors.phone} id="filled-basic" onChange={(e) => setFormData({...formData, phone: e.target.value})} label="Tel. numeris" variant="filled" />
            </div>
            <div className='field-fullwidth'>
              <TextField id="filled-basic" 
                multiline
                error={errors.message}
                rows={5}
                rowsMax={7} 
                onChange={(e) => setFormData({...formData, message: e.target.value})} 
                label="Žinutė" 
                variant="filled" />
              <Button variant="outlined" onClick={() => handleSendEmail()}>SIŲSTI ŽINUTĘ</Button>
            </div>
        </section>
      </main>
      <footer>
        Footer
      </footer>
    </div>
  )
}
