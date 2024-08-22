import logo from "./../Images/Ico.png"

const Header = () => {
  return (
    <div className="headerContainer flex flex-col">
       
       <div className="upperlayer h-[30px] w-screen bg-[#FFDB63]"></div>

       <div className="headerLayer flex justify-around h-[113px] w-screen py-3 items-center shadow">
        <div className="leftSec flex gap-2 items-center h-[21px] w-[234px] ">
           
             <img src={logo} alt="logo" height={26} width={28} />
             <p className="font-bold text-2xl">Delícias à Mesa</p>
              
        </div>

        <ul className="OptionSec  font-sans font-semibold text-xl flex h-[31px] w-[406px] gap-[46px]">
            <li><a href="#">Home</a></li>
            <li><a href="#">Receitas</a></li>
            <li><a href="#">Sobre nós</a></li>
        </ul>


        <div className=" rightSec flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-inner">
    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.41-1.41l4.58 4.58a1 1 0 01-1.42 1.42l-4.58-4.58zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
    </svg>
    <input
        className="bg-transparent outline-none text-gray-600 placeholder-gray-400 ml-2"
        type="text"
        placeholder="Search Recipe"
    />
</div>

         
       </div>

    </div>
  );
};

export default Header;