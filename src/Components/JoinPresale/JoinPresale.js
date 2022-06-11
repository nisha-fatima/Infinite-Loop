import { useState } from "react";
import "./JoinPresale.css";
const JoinPresale = () => {
  const [amount, setAmount] = useState("");
  const [referralAddress, setReferralAddress] = useState(
    "0xbaf217EA153E799250a20950F7f8d98C7F0c1478"
  );
  return (
    <section
      data-aos="zoom-in"
      data-aos-duration="2000"
      id="joinpresale"
      className="text-base text-white RoadMap_Card__A5iGA m-auto h-auto rounded-3xl hover:rounded-3xl w-72 md:w-full md:m-0 py-4 md:py-6 relative misc"
      style={{ textAlign: "center", marginTop: "80px", marginLeft: "113.82px" }}
    >
      <button
        className="width-100 block-imp metamask rounded-full text-white mr-2 hidden bg-purple-600 lg:block nav_btn "
        style={{ margin: "1em auto" }}
      >
        {/* <img src={require('../../assets/connect-wallet.png')} alt='metamask4'></img> */}
        Connect Wallet
        {/* <span>Connect Wallet</span> */}
      </button>
      <div className="box2 p-5 rounded-xl">
      <div className="app__data-wrapper grid" style={{ marginBottom: "-68px" }}>
        <div className="app__data-container flex flex--column">
          <h2 className="app__title text-base text-white">
            TOTAL TOKEN SALE
          </h2>
          <div className="app__data-content">
            <div className="app__value">
              <span className="saleqty text-base text-white">0</span>
              <span className="tokenSymbol text-base text-white ml-5">$ILX</span>
            </div>
          </div>
        </div>

        <div className="app__data-container flex flex--column">
          <h2 className="app__title text-base text-white">
            PRICE PER TOKEN &nbsp;
          </h2>
          <div className="app__data-content">
            <div className="app__value text-base text-white">
              1 USD =<span className="saleqty text-base text-white">200 </span>
              <span className="tokenSymbol text-base text-white">$ILX</span>
            </div>
          </div>
        </div>
      </div>

      <h2
        className="app__title mb-0 text-base text-white"
        style={{ fontWeight: "bold", marginTop: "28px" }}
      >
        Airdrop will be on the Binance Smart Chain (BSC)
        <br />
        <br />
        Alternative Coins Eth, Avax, Matic, Fantom Etc, can be sent to the
        wallet address below
      </h2>
      <p>
        <input
          type="text"
          id="referLink"
          readonly
          className="p-1"
          value="0xbaf217EA153E799250a20950F7f8d98C7F0c1478"
        />
      </p>
      <br />
      </div>

      {/* 
            <div className='app__data-container flex flex--column'>
                <h2 className='app__title mb-0 text-base text-white' style={{ textAlign: "left", fontWeight: "bold" }}>
                    Alternative Coins Eth, Avax, Matic, Fantom Etc, can be sent to the wallet address
                </h2>
                <div className='presale-100 rounded-full text-white mr-2 hidden bg-purple-600 lg:block nav_btn text-base text-white'>
                    0xbaf217EA153E799250a20950F7f8d98C7F0
                </div>
            </div> */}

      <div className="app__data-container flex flex--column">
        {/* <h2 className='app__title text-white' style={{ fontSize: '2.5rem', textAlign: "left" }}>Buy</h2> */}
        <img
          src={require("../../assets/icons8-cryptocurrency-64.png")}
          style={{ width: "56px" }}
        />
        <div className="app-trade">
          <div className="app-trade__items grid" id="presalegrid">
            <div className="app-trade__itemss flex justify-center">
              <div className="justify-between w-full p-5 rounded-xl">
                <div className="app-trade__token justify-between">
                  <div
                    className="form-check form-check-inline"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="1"
                    />
                    <label
                      className='class="form-check-label text-base text-white'
                      for="inlineRadio1"
                    >
                      <img
                        src={require("../../assets/USDT.png")}
                        alt="bnb-logo"
                      />
                      USDT
                    </label>
                  </div>

                  <div
                    className="form-check form-check-inline"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "Center",
                    }}
                  >
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="2"
                    />
                    <label
                      className='class="form-check-label text-base text-white'
                      for="inlineRadio2"
                    >
                      <img
                        src={require("../../assets/BSDT.png")}
                        alt="bnb-logo"
                      />
                      BUSD
                    </label>
                  </div>

                  <div
                    className="form-check form-check-inline"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "Center",
                    }}
                  >
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="2"
                    />
                    <label
                      className='class="form-check-label text-base text-white'
                      for="inlineRadio2"
                    >
                      <img
                        src={require("../../assets/icons8-credit-card-64.png")}
                        alt="bnb-logo"
                      />
                      DEBITCARD
                    </label>
                  </div>
                  <div
                    className="app-trade__item-input text-base text-white"
                    style={{ marginTop: "24px", fontSize: "18px" }}
                  >
                    0.0
                  </div>
                </div>

                <p className="app-trade__balance text-base text-white">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.binance.com/en/price/binance-usd"
                  >
                    Click here (Live BUSD TO USD)
                  </a>
                </p>
                <p className="flex justify-between items-center mt-2 w-full">
                  <p className="w-5/12">Amount</p>
                  <input
                    type="text"
                    id="referLink"
                    className="p-1 ml-3 h-[40px] w-7/12"
                    value={amount}
                    onChange={(e) => setAmount(e.targetvalue)}
                    placeholder="Enter Amount"
                  />
                </p>
                <p className="flex justify-between w-full mt-2">
                  <p className="w-5/12">Referral Address</p>
                  <input
                    type="text"
                    id="referLink"
                    className="p-1 ml-3 h-[40px] w-7/12"
                    value={referralAddress}
                    onChange={(e) => setReferralAddress(e.targetvalue)}
                    placeholder="Enter Referral Address"
                  />
                </p>
              </div>
            </div>

            <div
              className="app-trade__item flex justify-between w-full p-5 rounded-xl"
              style={{ marginBottom: "2em", marginTop: "1.3em" }}
            >
              <div className="app-trade__item-info flex flex--column">
                <div className="app-trade__token text-base text-white">
                  <img
                    src={require("../../assets/ilx icon.png")}
                    alt="min-logo"
                  />
                  $ILX
                </div>
              </div>
              <div
                className="app-trade__item-input text-base text-white"
                // style={{ width: "44%", marginTop: "3px", fontSize: "18px" }}
              >
                0.0
              </div>
            </div>
          </div>
          <button
            type="button"
            className="width-100 block-imp rounded-full mr-2 hidden bg-purple-600 lg:block font-bold p-4 small-btn text-base text-white"
            style={{
              margin: "1em auto",
              width: "100%",
              fontSize: "1.5rem",
              display: "block",
            }}
          >
            Buy
          </button>
        </div>
      </div>
    </section>
  );
};
export default JoinPresale;
