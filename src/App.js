import React from 'react';
import './css/App.css';

import ContentWindow from './components/ContentWindow.js.js';
import HeaderBar from './components/HeaderBar.js.js';

import Bombay from './img/bombay.jpeg';
import CelebSplit from './img/celebSplit.jpeg';
import EU from './img/eu.jpeg';
import ManBomb from './img/manBomb.jpeg';
import Megan from './img/megan.jpeg';
import McIlroy from './img/mcIlroy.jpeg';
import Strictly from './img/strictly.jpeg';
import Terrorist from './img/terrorist.jpeg';
import Transfers from './img/transfers.jpeg';
import Moranis from './img/moranis.jpeg';

function App() {
  return (
    <div>

      <HeaderBar head1="Long Reads" head4="See All" />

      <div class="longReadsBody">
        <ContentWindow source={Bombay} alt="Bombay" headline="Bombay Bicycle Club at O2 Victoria Warehouse, Manchester"/>
    
        <ContentWindow source={CelebSplit} alt="Celeb Split" headline="Celebrity couples who split within days (or hours) of getting married like Pamela Anderson" />

        <ContentWindow source={EU} alt="EU" headline="British Control Meets EU Power" />

        <ContentWindow source={ManBomb} alt="Manchester Bomb" headline="Manchester Arena bomber's brother 'just as guilty', court told" />

        <ContentWindow source={Megan} alt="Megan Markle" headline="The Unofficial Patron Saint of Daughters With Toxic Fathers" />

      </div>

      <HeaderBar head1="Newsbeat" head4="See All" />
      
      <div class="newsbeatBody">
        <ContentWindow source={McIlroy} alt="Rory McIlroy" headline="Rory McIlroy will usurp Brooks Koepka, return to world number one for first time since 2015" />

        <ContentWindow source={Strictly} alt="Strictly" headline="'Strictly's Kevin Clifton regrets 'I love Glasgow' tattoo every day" />

        <ContentWindow source={Terrorist} alt="Terrorist" headline="Streatham terrorist's father: 'I told him not to be naughty'" />

        <ContentWindow source={Transfers} alt="Transfers" headline="Transfer rumours: Daily round-up" />

        <ContentWindow source={Moranis} alt="Rick Moranis" headline="Rick Moranis could come out of retirement for Honey, I Shrunk The Kids" />

      </div>
    </div>
  );
}

export default App;
