import banner from "./../Images/Banner.png";

const Banner = () => {
  return (
<div>
<div
      className="h-[362px] w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
    </div>
 
<p className="text-center text-3xl font-bold my-10">Popular Recipes</p>

</div>
  );
};

export default Banner;
