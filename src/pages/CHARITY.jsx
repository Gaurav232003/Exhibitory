

import React, { useState } from 'react';
import pic from '../images/Mediamodifier-Design-Template.png';
import Navbar from '../components/Navbar';
import './charity.css'

const CHARITY = (props) => {
  const [proposals, setProposals] = useState([
    'Hello, This is Mayank, I have developed a passion for singing in the past year, however I am unable to buy a mic. Please help me get one to enhance my performance. The mic i am looking forward to get is called JBL Commercial CSHM10 and it costs around $18',
    'Hello, my name is Sarah and I am an aspiring dancer. I am seeking help to raise funds to purchase dance shoes and costumes necessary for my performances. The dance shoes cost around $80 and the costumes amount to approximately $150. Your support will directly contribute to my ability to continue pursuing my passion for dance. Thank you for considering my proposal.',
    'Hi there! My name is Michael, and I am a budding musician with a passion for playing the guitar. I am in need of financial assistance to purchase a new set of guitar strings and a capo, which are essential accessories for my performances. The guitar strings cost around $15, and the capo is priced at $20. Your generous contribution will greatly help me continue to create and share music with others. Thank you for your support!',
    
  ]);
  const arr =['https://app.realms.today/dao/CPmDLFBotGvZEDaipydirmjXtZNYbbgYnnVdQ9RwkbJn/proposal/Hn5yfaim671Xy8MWSfXRxo7cvau8btPjpPwArMUQjM1F','https://app.realms.today/dao/CPmDLFBotGvZEDaipydirmjXtZNYbbgYnnVdQ9RwkbJn/proposal/42T1DEenywRqirkDsK5dh8pYc7GwgcxQtvdnVGi7nQPL','https://app.realms.today/dao/CPmDLFBotGvZEDaipydirmjXtZNYbbgYnnVdQ9RwkbJn/proposal/HzaBmidoCwbacjiDw2ho8aqUbUJWkxTGm7u7TtMb1fkS'];
  const [newProposal, setNewProposal] = useState('');

  const getVoteUrl = (proposalText) => {
    // Replace this with your actual vote URL generation logic
    return `https://example.com/vote?proposal=${encodeURIComponent(proposalText)}`;
  }

  const handleNewProposalChange = (e) => {
    setNewProposal(e.target.value);
  }

  const handleNewProposalSubmit = (e) => {
    e.preventDefault();
    if (newProposal.trim() !== '') {
      setProposals([...proposals, newProposal]);
      setNewProposal('');
    }
  }
  const handler = (e) => {
      
  }

  return (
    <div>
      <Navbar />
      <div>
        <div className="charity-charity">
          <div className="charity-group5">
            <span className="charity-text">
              <span>HELP TO ARTISTS</span>
            </span>
          </div>
          <img src={pic} alt="LOGO9625" className="charity-logo" />
          <span className="charity-text2">
            <span>
              As an artist, it can be difficult to make a living solely off of
              our creative work. That&apos;s why charities that give back to
              artists are so important. By donating to these charities, you are
              helping to support the talented individuals who bring so much
              beauty and creativity into our world. Your donations can go towards
              providing funding for art supplies, studio space, or even just a
              small stipend to help cover basic living expenses. Every
              contribution helps to make it possible for artists to continue
              pursuing their passions and sharing their work with the world. So
              please, consider giving to a charity that supports artists today.
              Your generosity can make all the difference in the life of an
              artist.
            </span>
          </span>

          <span className="charity-text6">
            <span>ASK FOR HELP ...</span>
            <div className="charity-proposal-form">
              <h2>Submit a Proposal</h2>  
              <form onSubmit={handleNewProposalSubmit}>
                <textarea
                  value={newProposal}
                  onChange={handleNewProposalChange}
                  placeholder="Enter your proposal here..."
                ></textarea>
                <button type="submit">Submit Proposal</button>
              </form>
              <br></br>
              <br></br>
              
            </div>
            <h1>Submitted Charity Proposals</h1>
            <div className="charity-proposal-cards">
              {proposals.map((proposalText, index) => (
                <div key={index} className="charity-proposal-card">
                  <p>{proposalText}</p>
                  <button><a href={arr[index]}>Vote</a></button>
                </div>
              ))}
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CHARITY;