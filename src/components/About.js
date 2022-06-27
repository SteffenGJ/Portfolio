import React from "react";
import coolBird from "../images/cool-bird.jpg";

const About = () => {
    return (
        <main>
            <section className="about-section">
                <h1 className="normal-heading">About me!</h1>
                <div className="flex-container">
                    <img src={coolBird}/>
                    <div className="text-box" id="about-text-box">
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

export default About