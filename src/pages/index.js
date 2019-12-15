import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import profilbild from '../assets/images/profilbild.jpg';
import way from '../assets/images/way.jpg';
import hand from '../assets/images/hand.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import logo_small from '../assets/img/logo_200x200.png'; 
import config from '../../config';

const content = require("../assets/texts/intro.json");

const IndexPage = () => (
  <Layout fullMenu>
    <section id="banner">
      <div className="inner">
        <img src={logo_small} alt="" />
      </div>
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <p>{config.subHeading2}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Erfahre mehr
              </a>
            </Scroll>
            <Scroll type="id" element="one">
              <a href="/#" className="more"/>
            </Scroll>
          </li>

        </ul>
      </div>
    </section>
    <section id="one" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={profilbild} alt="" />
        </div>
        <div className="content">
          <h2>{content.profile.title}</h2>
          <p>{content.profile.peopleAreKey}</p>
          <p>{content.profile.whatIdoBest}</p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={way} alt="" />
        </div>
        <div className="content">
          <h2>{content.profile.myDriver}</h2>
          <p>{content.profile.myWay}</p>
          <p>{content.profile.myMission}</p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={hand} alt="" />
        </div>
        <div className="content">
          <h2>{content.profile.handsOn}</h2>
          <p>{content.profile.nothingChanges}</p>
          <p>{content.profile.getHandsDirty}</p>
        </div>
      </section>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>{content.profile.whatsNext}</h2>
          <p>{content.profile.getInContact}</p>
          <p>{content.profile.bestRegards}</p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit primary">
              Referenzen
            </a>
          </li>
          <li>
            <a href="/#" className="button fit">
              e-Mail
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
