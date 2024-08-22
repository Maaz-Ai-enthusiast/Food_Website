import RecipeCard from "./RecipeCard";
import card1 from "./../Images/card1.png";
import card2 from "./../Images/card2.png";
import card7 from "./../Images/card7.png";

const RecipeCon = () => {
  return (
    <div className="h-[473.68px] w-full flex justify-evenly">
      <RecipeCard
        img={card1}
        title="Panquecas"
        des="Receita bacana pra comer com os amigos de manhã."
      />
            <RecipeCard
        img={card2}
        title="Waffles"
        des="Receita bacana pra comer com os amigos de manhã."
      />
            <RecipeCard
        img={card7}
        title="Chocolate quente"
        des="Receita bacana pra comer com os amigos de manhã."
      />
    </div>
  );
};

export default RecipeCon;
