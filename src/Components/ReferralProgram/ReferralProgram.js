import "./ReferralProgram.css";
const ReferralProgram = () => {
  return (
    <section
      data-aos="zoom-in"
      data-aos-duration="2000"
      id="referrals"
      className="moile-text-center RoadMap_Card__A5iGA m-auto h-auto hover:rounded-3xl w-72 md:w-full md:m-0 py-4 md:py-6 relative misc box2 bg-pink-50 p-5 rounded-xl"
      style={{ textAlign: "left", marginTop: "80px", marginLeft: "113.82px" }}
    >
      <h3
        className="text-center-airdrop text-[54px]-airdrop text-white-airdrop font-bold-airdrop"
        style={{ fontSize: "36px" }}
      >
        Referral Program
      </h3>
      <p className="mobile-text-center text-base text-white inline-block mt-5 font-bold">
        Share your Referral link or QR code and earn Commission for Referred
        Token Purchases instantly to your wallet.
      </p>
      <br />
      <br />
      <p
        className="mobile-text-center text-base text-white  font-bold"
        style={{ textAlign: "left" }}
      >
        Referral Commission is 2.5% of Referred Transaction
      </p>
      <br />
      <p className="mobile-text-center text-base text-white  font-bold">
        The Project will be launching on BSC via DXSale Launchpad
      </p>
      <br />
      <p
        className="mobile-text-center text-base text-white  font-bold"
        style={{ textAlign: "left" }}
      >
        Share your referral link or QR code and get commission for Referred
        Token Purchases instantly to your wallet.
      </p>
      <br />
      <p>
        <input
          type="text"
          id="referLink"
          readonly
          className="p-1"
          value="Connect your Wallet"
        />
      </p>
      <button
        className="rounded-full flex justify-center items-center bg-purple-600 lg:block nav_btn text-base text-white"
        style={{ margin: "1em auto" }}
      >
        Copy
      </button>
    </section>
  );
};
export default ReferralProgram;
