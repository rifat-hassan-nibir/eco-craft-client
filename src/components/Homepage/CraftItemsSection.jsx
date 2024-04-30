import { useEffect, useState } from "react";
import CraftItemCard from "./CraftItemCard";

const CraftItemsSection = () => {
  const [craftItems, setCraftItems] = useState([]);

  useEffect(() => {
    fetch("https://eco-craft-server.vercel.app/all-items")
      .then((res) => res.json())
      .then((data) => setCraftItems(data));
  }, []);

  console.log(craftItems);
  return (
    <div className="py-[100px]">
      <div className="container mx-auto">
        <h1 className="lg:text-[32px] text-[24px] dark:text-white text-center font-semibold mb-5">Latest Craft Items</h1>
      </div>
      {craftItems.length > 0 && (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container mx-auto lg:gap-[50px] gap-[25px]">
          {craftItems.slice(0, 6).map((singleCraftItem, index) => (
            <CraftItemCard singleCraftItem={singleCraftItem} key={index}></CraftItemCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default CraftItemsSection;
