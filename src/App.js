import { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFalse, setIsFalse] = useState(true);
  const togleFalse = () => {
    setIsOpen(!isFalse);
  };
  const togleOpen = () => {
    setIsFalse(!isFalse);
    setIsOpen(!isOpen);
  };
  return (
    <div className="container">
      <div className="wrapper">
        <img src="LogoBlack.png" className="img" alt="" />
        <div className="text">
          TT ELD is an industry-leading electronic logging device. Our ELD
          compliance solution provides users with a wide variety of
          comprehensive features.
        </div>

        <a className="box" href="https://us.tteld.com/update/tteld.apk">
          <div>
            <div className="textName">
              <span>Download App</span>
            </div>
          </div>
        </a>
        {isFalse && (
          <div className="others" onClick={togleOpen}>
            Other links
          </div>
        )}

        {isOpen ? (
          <>
            <a className="box" href="https://us.tteld.com/update/4.apk">
              <div>
                <div className="textName">
                  <span>
                    Android <span className="middle">APK 4.6.7</span> download
                  </span>
                </div>
              </div>
            </a>
            <a
              className="box"
              href="https://play.google.com/store/apps/details?id=com.tteld.app&hl=ru&gl=US"
            >
              <div>
                <div className="textName">
                  <span>
                    TT ELD <span className="middle">Android</span> app download
                  </span>
                </div>
              </div>
            </a>

            <a
              className="box"
              href="https://apps.apple.com/uz/app/tt-eld/id1596279099"
            >
              <div>
                <div className="textName">
                  <span>
                    TT ELD <span className="middle">iOS</span> app download{" "}
                  </span>
                </div>
              </div>
            </a>

            <a
              className="box"
              href="https://apps.apple.com/uz/app/tt-eld/id1596279099"
            >
              <div>
                <div className="textName">
                  <span>
                    IOSIX update <span className="middle">APK</span>
                  </span>
                </div>
              </div>
            </a>

            {products.map((item) => (
              <a
                className="box"
                href={item.path}
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <div className="textName">{item.name2}</div>
                </div>
              </a>
            ))}
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;

const products = [
  {
    id: 4,

    name2: "TT ELD Sticker ",
    path: "https://us.tteld.com/docs/sticker.png",
    title:
      "A simple sticker can help roadside or enforcement personnel quickly ascertain that the device on board is in fact an ELD and carry out the inspection accordingly.",
    price: "Download",
    // icon: android,
  },
  {
    id: 5,
    name2: "Certificate",
    // name2:"IOS APP",
    path: "https://us.tteld.com/docs/Certificate.pdf",
    title: "TT ELD is certified for customers confidence and safety",
    price: "Download",
    // icon: app,
  },
  {
    id: 6,
    name2: "Inspection ",
    // name2:"APP",
    path: "https://us.tteld.com/docs/Inspection.pdf",

    title: "Step by step guid for drivers during inspection",
    price: "Download",

    // icon: play,
  },
  {
    id: 7,
    name2: "Users manual",
    title:
      "The source for both drivers and dispatchers to guide while using TT ELD",
    price: "Download",
    // icon: play,
    path: "https://us.tteld.com/docs/Usersmanual.pdf",
  },
  {
    id: 8,
    name2: "Installation",
    title:
      "Quick instruction to setup both driver application and eld device before using TT ELD",
    price: "Download",
    // icon: app,
    path: "https://us.tteld.com/docs/Setup.pdf",
  },
  {
    id: 9,
    name2: "Malfunction",
    title: "The guide when eld or driver application does not work as intended",
    price: "Download",
    path: "https://us.tteld.com/docs/EldMalfunction.pdf",
  },
];
