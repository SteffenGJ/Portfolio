import React from "react";
import css from "../images/css-logo.png";
import html from "../images/html-logo.png";
import js from "../images/js-logo.png";
import react from "../images/react-logo.png";
import redux from "../images/redux-logo.png";

const Home = () => {
    return (
        <main>
            <section className="home-section">
                <div className="upper-page">
                    <h1 className="main-heading">Welcome to my portfolio!</h1>
                    <h6>By <span className="name-span">Steffen Georgi Jensen</span></h6>
                </div>
                <div className="wrapper">
                <div className="skills">
                    <img className="card" src={react}/>
                    <img className="card" src={redux}/>
                    <img className="card" src={js}/>
                    <img className="card" src={html}/>
                    <img className="card" src={css}/>
                </div>
                <div className="text-box" id="main-text-box">
                    <h2>Etlorandet titel</h2>
                    <p>Etlorandet helt vildt nejkrn esn oeshreo efhros eifhesp ehpfh efwperh.
                        nefjrlfw Ejfei eRwjE <span>fwOjfeW</span> e92 34 fhwuo woir.</p><br/><br/><p>Thi derfor kan dnjer,
                        frjekf ieowfj ef. fjeiE krEOw eof cbvnaiqjfne. Emnlwv wejwl vnwlk, nvejneknew.
                        NWkernfw fjerlf <span>weFMwef</span> ejkifjw efw EFejif cjioqpriy hb. Fkng suri tbhjvs,vsv.
                        Mernjbehg sgjl sebhgk </p><br/><br/><p>culbwert wl gnfdo o dho <span>duosrhg</span> isu ruei reuiw pe ruiw r.
                        nejk enrwehw eiut we. </p><br/><br/><p>Fmreohw hueirgfw o fguwief givbjnwbhkr tuweio tbewog weprutp,
                        gjreioge eruiegei.
                        DErjhgeor gowp ghowpe gpwoe gv upq fblv <span>bvfuyor</span> blrtg uregh uwp hueræw.
                    </p>
                </div>
                </div>
            </section>
        </main>
    )
}

export default Home