import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

import { GlobalStyle } from "../../assets/css/globalStyle";
import { GlobalColorsStyle } from "../../assets/css/colorsLib";
import { Header, UserSettingBarWrap, UserPointsSection, UserPointsWrap, UserPointsCounterWrap, CounterCard, Counter, DiscountPill, PageGlobal, ReferAndEarnCard, ActivitySection, ActivityWrap, ActivityCard, CtaImageContentCard } from "./styled.js";
import SectionTopSpace from '../../components/SectionTopSpace';


export default function AdminMain() {
  SectionTopSpace();


  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {


    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);


  }, []);

  return (
    <>
      <GlobalStyle />
      <GlobalColorsStyle />
      <PageGlobal />
      <Header className={scrollPosition > 30 ? "header-active" : ""}>
        <div className='container'>
          <div className=' d-flex justify-content-between align-items-center '>
            <h6 className='text-center'>Alme Mater</h6>
            <Link to="" className='custom-btn'> Connect Wallet </Link>
            <UserSettingBarWrap hidden={true}>
              <li><button type='button'><img src={require("../../assets/images/setting-white-icon.svg").default} alt="Setting" /></button></li>
              <li><button type='button'><img src={require("../../assets/images/notification-white-icon.svg").default} alt="Notification" /></button></li>
              <li><button type='button' className='user-drop-down-btn'><img src={require("../../assets/images/person-prfile-img.png")} alt="profile-pic" /> Jenny Wilson</button></li>
            </UserSettingBarWrap>
          </div>
        </div>
      </Header>

      <main>
        <UserPointsSection className='hero-section'>
          <div className="container">
            <UserPointsWrap>
              <div className="row gy-4">
                <div className="col-xl-9 col-lg-8">
                  <UserPointsCounterWrap>
                    <div className="row align-items-center gy-4 ">
                      <div className="col-sm-6">
                        <h5 className="mb-4">Welcome to Alme mater</h5>
                        <p className="mb-5">Frens of Alme Mater will be airdropped 10% of $ALME’s circulating
supply on launch based on accumulated Alme Points.</p>
                        <button type="button"
                          className='custom-btn'>
                          Earn More Points 🌟
                        </button>
                        <p className="mt-4">Alme Points' balances will be refreshed every 24 hours</p>
                      </div>
                      <div className="col-sm-6">
                        <CounterCard className="ms-sm-auto me-sm-0 mx-auto">
                          <p className="mb-0">Total Available points</p>
                          <Counter className="h2 mb-0">1000</Counter>
                          <DiscountPill discountup="true" className='mx-auto'>
                            20%
                          </DiscountPill>
                        </CounterCard>
                      </div>
                    </div>
                  </UserPointsCounterWrap>
                </div>
                <div className="col-xl-3 col-lg-4">
                  <ReferAndEarnCard>
                    <img src={require("../../assets/images/golden-coins-icon.svg").default} alt="coins icon" />
                    <h5 className="mb-3 theme-text-black-primary">Refer and Earn 1500</h5>
                    <p className="theme-text-black-primary">Invite friends: Both you and the person you refer receive 1500 bonus Alme Points. These are credited soon as the person you refer joins our Discord. </p>
                    <button type="button" className='custom-btn'> Copy Link 🔗</button>
                  </ReferAndEarnCard>
                </div>
              </div>
            </UserPointsWrap>
          </div>
        </UserPointsSection>

        <ActivitySection className="theme-bg-black-primary">
          <div className="container">
            <ActivityWrap>
              <h5 >Activities</h5>
              <p className="mb-4">Get rewarded for your activities on Alme Mater, let’s get started!</p>
              <div className="row gy-4">
                <div className="col-xl-3 col-md-6">
                  <ActivityCard>
                    <div className="item-img"><img src={require("../../assets/images/discord-icon.png")} alt="Discord" /></div>
                    <h6> Discord <span className="info" data-info="Join and get verified on Discord." ><img src={require("../../assets/images/info-icon.svg").default} alt="info" /></span></h6>
                    <div className="align-items-center d-flex flex-column flex-md-row gap-4 justify-content-lg-between">
                      <DiscountPill points="true">
                        100
                      </DiscountPill>
                      <Link to="https://discord.gg/amewkxzs7J" className='custom-btn' target="_blank"> Join Discord </Link>
                    </div>
                  </ActivityCard>
                </div>
                <div className="col-xl-3 col-md-6">
                  <ActivityCard>
                  <div> 
                    <div className="item-img"><img src={require("../../assets/images/gm-per-day-icon.png")} alt="GM Per Day" /></div>
                    <h6> GM Per Day <span className="info" data-info="Type /gm and paste your wallet address" ><img src={require("../../assets/images/info-icon.svg").default} alt="info" /></span></h6>
                  </div>
                    <div className="align-items-center d-flex flex-column flex-md-row gap-4 justify-content-lg-between">
                      <DiscountPill points="true">
                        10
                      </DiscountPill>
                      <button type="button" className='custom-btn'> Join Activity</button>
                    </div>
                  </ActivityCard>
                </div>
                <div className="col-xl-3 col-md-6">
                  <ActivityCard>
                   <div> 
                    <div className="item-img"><img src={require("../../assets/images/refer-and-earn-icon.png")} alt="Refer & Earn " /></div>
                    <h6>Refer & Earn  <span className="info" data-info="Both you and the person you refer receive 1500 bonus Alme Points." ><img src={require("../../assets/images/info-icon.svg").default} alt="info" /></span></h6>
                    </div>
                    <div className="align-items-center d-flex flex-column flex-md-row gap-4 justify-content-lg-between">
                      <DiscountPill points="true">
                        10
                      </DiscountPill>
                      <button type="button" className='custom-btn'>Refer Now</button>
                    </div>
                  </ActivityCard>
                </div>
                <div className="col-xl-3 col-md-6">
                  <ActivityCard>
                   <div> 
                    <div className="item-img"><img src={require("../../assets/images/subscribe-newsletter-icon.png")} alt="Subscribe Newsletter " /></div>
                    <h6>Subscribe Newsletter  <span className="info" data-info="Keep yourself updated with Alme Mater Newsletter" ><img src={require("../../assets/images/info-icon.svg").default} alt="info" /></span></h6>
                    </div>
                    <div className="align-items-center d-flex flex-column flex-md-row gap-4 justify-content-lg-between">
                      <DiscountPill points="true">
                        250
                      </DiscountPill>
                      <button type="button" className='custom-btn'>Subscribe</button>
                    </div>
                  </ActivityCard>
                </div>
              </div>
              <div className="row mt-5 gy-4">
                <div className="col-lg-12">
                  <CtaImageContentCard>
                    <div className="d-flex align-items-center gap-5 flex-md-row flex-column">
                      <div>
                        <div className="item-img" >
                          <img src={require("../../assets/images/mint-genesis-nft-image.png")} alt="Genesis NFT" />
                        </div>
                      </div>
                      <div >
                        <h5 className="mb-3">Genesis NFT - 300 pts</h5>
                        <p className="mb-5">Unlock your journey into the future of learning by minting your Genesis NFT today! </p>

                        <button className="custom-btn" type="button">Mint ID</button>
                      </div>
                    </div>
                  </CtaImageContentCard>
                </div>
                <div className="col-lg-12">
                  <CtaImageContentCard>
                    <div className="d-flex align-items-center gap-5 flex-md-row flex-column">
                      <div>
                        <div className="item-img" >
                          <img src={require("../../assets/images/mint-genesis-nft-image.png")} alt="Mint Genesis NFT" />
                        </div>
                      </div>
                      <div >
                        <h5 className="mb-3">Hodl NFT 20 per day </h5>
                        <p className="mb-5">Earn exclusive rewards and accumulate points just by holding your NFT — your gateway to continuous benefits and opportunities!</p>

                        <button className="custom-btn" type="button">Hodl NFT</button>
                      </div>
                    </div>
                  </CtaImageContentCard>
                </div>
              </div>
            </ActivityWrap>
          </div>
        </ActivitySection>
      </main>
      <footer className="theme-bg-black-primary  ">
        <div className="container">
          <div className='row gy-4 justify-content-center flex-md-row flex-column-reverse'>
            <div className=' col-md-6'>
              <p className='mb-0 text-md-start text-center'>
                <strong>© 2024</strong> Alme Mater.
                All Rights Reserved
              </p>
            </div>
            <div className=' col-md-6'>
              <ul>
                <li>
                  <Link
                    to='https://twitter.com/almemater'
                    target='_blank'>
                    <del>Twitter</del> X
                  </Link>
                </li>
                <li>
                  <Link
                    to='https://t.me/+edzcRxDe_Vc1ZGQ1'
                    target='_blank'>
                    Telegram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}
