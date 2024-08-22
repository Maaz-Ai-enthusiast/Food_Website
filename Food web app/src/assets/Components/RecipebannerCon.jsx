import RecipeBanner from "./RecipeBanner";
import card3 from "./../Images/card3.png";
import card4 from "./../Images/card4.png";
import card6 from "./../Images/card6.png";
const RecipebannerCon = () => {
  return (
    <div className="flex flex-col justify-between h-[1208px] w-[80%] mx-auto ">
      <p className="text-center text-3xl font-bold">Recent Recipes</p>
      <div className="flex flex-col justify-between">
        <RecipeBanner
          img={card3}
          title="Donut"
          des="Donuts caseiros irresistíveis com massa macia e coberturas deliciosas."
        />

        <RecipeBanner
          img={card4}
          title="Cereal"
          des="Cereal crocante e saboroso, perfeito para um café da manhã ou lanche rápido. Uma opção deliciosa e nutritiva para começar o dia com energia."
        />

        <RecipeBanner
          img={card6}
          title="Cookies"
          des="Cookies caseiros irresistíveis com massa macia e pedaços generosos de chocolate."
        />
      </div>
    </div>
  );
};

export default RecipebannerCon;
