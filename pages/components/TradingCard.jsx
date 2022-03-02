
import React from 'react';

const TradingCard = ({item}) => {


    return (
        <div className="trading-card">
            <div id="template" class="asset">
                <div class="card-container">
                    <div class="card_frame">
                        <div class="card_body">
                            <div class="card_head">
                                <div class="card_main">
                                    <h5 id="top">Metaverse PASS</h5>
                                    <h1 class="name">{item.name}</h1>
                                    <div class="right">
                                        <img class="fire_type" src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/601220/e3245d54b4dee90e35e61330c9d97145605d3265.jpg" alt="Fire Energy Type Symbol"></img>
                                        <span class="health">3200</span>
                                    </div>
                                </div>

                                <div class="img_frame">
                                    <div class="poke_img">
                                    </div>
                                </div>

                                <div class="poke_facts">
                                    <span>
                                        
                                    </span>
                                </div>
                            </div>

                            <div class="poke_attacks">
                                <div class="first_attack">

                                    <h3>
                                        A mysterious land filled with the archives of all things design.</h3>

                                </div>

                            </div>
                            <div class="coordinates type">
                                <p>Coordinates: <span>[10.233, -23.054]</span></p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TradingCard;