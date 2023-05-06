import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Nav from './Nav';

import image1 from '../assets/10years.jpg';
import image2 from '../assets/news2.png';
import image3 from '../assets/news3.png';
import image4 from '../assets/news4.png';
import image5 from '../assets/news5.png';

export default function News() {
  return (
    <div>
           <div classNameName="App">
        <Nav/>
        <div class="card-container">
        <div className="container" style={{position:'block',left:'100px',paddingTop:'20px',marginRight:'100px'}}>
            <div className="row" >
          <div className="col-md-2" style={{paddingTop:'30px',margin:'2.6em'}}>
             <article class="card">
  <img
    class="card__background"
    src={image1}
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width="1920"
    height="2193"
  />
  <div class="card__content | flow">
    <div class="card__content--container | flow">
      <h2 class="card__title"  style={{color:'white'}}>10 Years Of Watch</h2>
      <h2 class="card__title" style={{fontSize:'20px'}}></h2>
      <p class="card__description" style={{color:'white'}}>
      Mixtape turns 10 today, and what an incredible ride it's been! When we started off as an artist management company, we could have only hoped that we would grow into the multifacete...
      </p>
    </div>
    <button class="card__button">Read more</button>
  </div>
</article>
    </div>
    <div className="col-md-2" style={{paddingTop:'30px',margin:'2.6em'}}>
             <article class="card">
  <img
    class="card__background"
    src={image2}
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width="1920"
    height="2193"
  />
  <div class="card__content | flow">
    <div class="card__content--container | flow">
      <h2 class="card__title"  style={{color:'white'}}>Naezy X Watch</h2>
      <h2 class="card__title" style={{fontSize:'20px'}}></h2>
      <p class="card__description" style={{color:'white'}}>
      We are thrilled to announce our association with one of the torchbearer of Indian rap, Naezy. Mixtape will be working on a partnership with Kwan talent on his live production and ...
      </p>
    </div>
    <button class="card__button">Read more</button>
  </div>
</article>
    </div>
    <div className="col-md-2" style={{paddingTop:'30px',margin:'2.6em'}}>
             <article class="card">
  <img
    class="card__background"
    src={image3}
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width="400vw"
    height="28.125rem"
  />
  <div class="card__content | flow">
    <div class="card__content--container | flow">
      <h2 class="card__title"  style={{color:'white'}}>My Baby in India</h2>
      <h2 class="card__title" style={{fontSize:'20px'}}></h2>
      <p class="card__description" style={{color:'white'}}>
      Mixtape turns 10 today, and what an incredible ride it's been! When we started off as an artist management company, we could have only hoped that we would grow into the multifacete...
      </p>
    </div>
    <button class="card__button">Read more</button>
  </div>
</article>
    </div>
    <div className="col-md-2" style={{paddingTop:'30px',margin:'2.6em'}}>
             <article class="card">
  <img
    class="card__background"
    src={image4}
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width="1920"
    height="2193"
  />
  <div class="card__content | flow">
    <div class="card__content--container | flow">
      <h2 class="card__title"  style={{color:'white'}}>OX7GEN After Dark Residency @ Bonobo</h2>
      <h2 class="card__title" style={{fontSize:'20px'}}></h2>
      <p class="card__description" style={{color:'white'}}>
      Mixtape turns 10 today, and what an incredible ride it's been! When we started off as an artist management company, we could have only hoped that we would grow into the multifacete...
      </p>
    </div>
    <button class="card__button">Read more</button>
  </div>
</article>
    </div>
    <div className="col-md-2" style={{paddingTop:'30px',margin:'2.6em'}}>
             <article class="card">
  <img
    class="card__background"
    src={image1}
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width="1920"
    height="2193"
  />
  <div class="card__content | flow">
    <div class="card__content--container | flow">
      <h2 class="card__title"  style={{color:'white'}}>10 Years Of Watch</h2>
      <h2 class="card__title" style={{fontSize:'20px'}}></h2>
      <p class="card__description" style={{color:'white'}}>
      Mixtape turns 10 today, and what an incredible ride it's been! When we started off as an artist management company, we could have only hoped that we would grow into the multifacete...
      </p>
    </div>
    <button class="card__button">Read more</button>
  </div>
</article>
    </div>
    <div className="col-md-2" style={{paddingTop:'30px',margin:'2.6em'}}>
             <article class="card">
  <img
    class="card__background"
    src={image1}
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width="1920"
    height="2193"
  />
  <div class="card__content | flow">
    <div class="card__content--container | flow">
      <h2 class="card__title"  style={{color:'white'}}>10 Years Of Watch</h2>
      <h2 class="card__title" style={{fontSize:'20px'}}></h2>
      <p class="card__description" style={{color:'white'}}>
      Mixtape turns 10 today, and what an incredible ride it's been! When we started off as an artist management company, we could have only hoped that we would grow into the multifacete...
      </p>
    </div>
    <button class="card__button">Read more</button>
  </div>
</article>
    </div>
    <div className="col-md-2" style={{paddingTop:'30px',margin:'2.6em'}}>
             <article class="card">
  <img
    class="card__background"
    src={image1}
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width="1920"
    height="2193"
  />
  <div class="card__content | flow">
    <div class="card__content--container | flow">
      <h2 class="card__title"  style={{color:'white'}}>10 Years Of Watch</h2>
      <h2 class="card__title" style={{fontSize:'20px'}}></h2>
      <p class="card__description" style={{color:'white'}}>
      Mixtape turns 10 today, and what an incredible ride it's been! When we started off as an artist management company, we could have only hoped that we would grow into the multifacete...
      </p>
    </div>
    <button class="card__button">Read more</button>
  </div>
</article>
    </div>
    <div className="col-md-2" style={{paddingTop:'30px',margin:'2.6em'}}>
             <article class="card">
  <img
    class="card__background"
    src={image1}
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width="1920"
    height="2193"
  />
  <div class="card__content | flow">
    <div class="card__content--container | flow">
      <h2 class="card__title"  style={{color:'white'}}>10 Years Of Watch</h2>
      <h2 class="card__title" style={{fontSize:'20px'}}></h2>
      <p class="card__description" style={{color:'white'}}>
      Mixtape turns 10 today, and what an incredible ride it's been! When we started off as an artist management company, we could have only hoped that we would grow into the multifacete...
      </p>
    </div>
    <button class="card__button">Read more</button>
  </div>
</article>
    </div>
    
            </div>
          </div>
          
        </div>
    </div>
    </div>
  );
}