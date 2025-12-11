//Aca estoy encapsulando la cantida de cards que mostrara en pagina.
import Card from "./Card";

const CardsTimes = () => {
  const DsEnemies = [
    {
      Enemy: "Frozen Reindeer",
      id: 1,
      Description:
        "enemy in Dark Souls 2 (DKS2). Made of ice crystals and sporting antelope-like horns, the Frozen Reindeer is a horse-like creature found in the Frigid Outskirts. Enemies have their own behavior and unique attacks, killing enemies provide various drops that reward players with items and souls.",
      Imagen: "https://darksouls2.wiki.fextralife.com/file/Dark-Souls-2/8FE4NHG.png"
    },
    {
      Enemy: "The (Blue) Smelter Demon",
      id: 2,
      Description:
        "The Blue Smelter Demon in Iron Passage, also known as the Aged Smelter Demon, is powered by magic instead of Fire. It is highly resistant to Magic and vulnerable to Dark and Lightning damage.",
        Imagen: "https://static.wikia.nocookie.net/darksouls/images/6/6d/Smelter_Demon_%28Iron_Passage%29_-_01.jpg/revision/latest?cb=20170419212259"
    },
    {
      Enemy: "Charred Loyce Knight",
      id: 3,
      Description:
        " The Charred Loyce Knight, equipped with various melee weapons and skilled in pyromancy, engages in coordinated squad combat. They persistently respawn until three out of four good Loyce Knights seal the gates. Enemies have their own behavior and unique attacks.",
        Imagen: "https://static.wikia.nocookie.net/darksouls/images/e/e4/CotIK_enemy_Charred_Loyce_Knight.png/revision/latest?cb=20141002165817"
    },
    {
      Enemy: "Body Statues",
      id: 4,
      Description:
        "After entering from The Gutter there is an immediate cave to the left with a Bonfire inside. Make sure to use this before proceeding down the pathway, which itself is pretty easy to follow in a single linear progression. The poison statues you encountered in the gutter that were previously scattered, are now in abundance everywhere, making them a greater threat, or equal to, the enemies in this area.",
        Imagen: "https://static.wikia.nocookie.net/darksouls/images/4/46/Poisonstatuebug.png/revision/latest?cb=20140905222701"
    },
  ];

  return (
    <div className="row">
      <Card Chars={DsEnemies} ScopeID={1} />
      <Card Chars={DsEnemies} ScopeID={2} />
      <Card Chars={DsEnemies} ScopeID={3} />
      <Card Chars={DsEnemies} ScopeID={4} />
    </div>
  );
};
export default CardsTimes;
