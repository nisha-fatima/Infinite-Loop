import "./IDOToken.css";
const IDOToken = () => {
  return (
    <section
      id="ido"
      className="utility Innovate_innovateCard__e1Jff m-auto h-auto px-5 md:px-0 rounded-3xl hover:rounded-3xl md:w-full md:m-0 py-4 md:py-6 aos-init aos-animate"
    >
      <h1 className="color">IDO and Token Information</h1>
      <h3 className="color" style={{ fontSize: "1.5rem" }}>
        $ILX Presale information
      </h3>
      <div className="d-flex-IDO w-full">
        <div className="col-IDO text-center">
          <h5>Public Price</h5>
          <span className="col-IDO-1">0.20 $ILX</span>
        </div>
        <div className="col-IDO text-center">
          <h5>Maximum Supply</h5>
          <span className="col-IDO-1">142,000,000 $ILX</span>
        </div>
        <div className="col-IDO text-center">
          <h5>Supply at listing</h5>
          <span className="col-IDO-1">14,200,000 $ILX</span>
        </div>
        <div className="col-IDO text-center">
          <h5>Initial Market Cap</h5>
          <span className="col-IDO-1">2,840,000 $ILX</span>
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
      >
        <div
          style={{
            backgroundColor: "rgb(8,56,136)",
            width: "80%",
            padding: "20px",
            borderRadius: "13px",
          }}
        >
          <h1
            className="col-IDO"
            style={{ textAlign: "center", fontSize: "30px" }}
          >
            Tokenomics Percentage
          </h1>

          <div
            className="w-full"
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "20px",
            }}
          >
            <div className="col-IDO w-4/12 text-center">
              <h5>Team</h5>
              <span className="col-IDO-1">7%</span>
            </div>

            <div className="col-IDO w-4/12 text-center">
              <h5>Liquidity</h5>
              <span className="col-IDO-1">40%</span>
            </div>

            <div className="col-IDO w-4/12 text-center">
              <h5>Ecosystem</h5>
              <span className="col-IDO-1">9%</span>
            </div>
          </div>

          <div
            className="w-full"
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "20px",
            //   gap: "16em",
            }}
          >
            <div
              className="col-IDO w-4/12 text-center"
            //   style={{ position: "relative", left: "41px" }}
            >
              <h5>Staking / Rewards</h5>
              <span className="col-IDO-1">34%</span>
            </div>

            <div
              className="col-IDO w-4/12 text-center"
            //   style={{ position: "relative", left: "-37px" }}
            >
              <h5>Private Scale</h5>
              <span className="col-IDO-1">10%</span>
            </div>

            <div
              className="col-IDO w-4/12 text-center"
            //   style={{ position: "relative", right: "60px" }}
            >
              <h5>DX Scale</h5>
              <span className="col-IDO-1">10%</span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "20px",
            }}
          >
            <div className="col-IDO w-4/12 text-center">
              <h5>Airdrop</h5>
              <span className="col-IDO-1">2%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IDOToken;
