import footerlogo from "./../Images/Ico.png";
import yicon from "./../Images/Youtube.png";
import Ticon from "./../Images/Twitter.png";
import Picon from "./../Images/Pinterest.png";
import Bicon from "./../Images/Browser.png";
const Footer = () => {
  return (
    <div className="h-[273px] w-screen bg-[#FFDB63] mt-4 flex justify-around">
      <div className="logoCon flex gap-3 items-center">
        <img src={footerlogo} alt="logo" height={46}  width={49}/>
        <p className="font-bold text-4xl text-[#2C2B2B]">Delícias à Mesa</p>
      </div>
      <div className="iconsCon h-[102px] w-[200px] flex flex-col justify-between my-auto">
        <p className="font-bold text-xl">Redes sociais:</p>
        <div className="icons flex gap-1">
            <img src={yicon} alt="youtube_icon" height={44} width={44} />
            <img src={Ticon} alt="Twitter_icon" height={44} width={44} />
            <img src={Picon} alt="Pinterest_icon" height={44} width={44} />
            <img src={Bicon} alt="Browser_icon" height={44} width={44} />
        </div>
      </div>
    </div>
  );
};

export default Footer;