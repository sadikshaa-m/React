

export default function Menu() {
  return (
    <div className="grid grid-cols-2 mx-25 max-sm:grid-cols-1 max-md:mx-8 gap-5">
        <div>
            <h1 className="tracking-[5px] font-medium text-4xl text-center py-10">Our Menu</h1>
            
            <h1 className="tracking-[5px] text-xl py-5">Bread Basket</h1>
            <h1 className="text-gray-500 text-[15px] mb-8">Assortment of fresh baked fruit breads and muffins 5.50</h1>
            <h1 className="tracking-[5px] text-xl py-5">Honey Almond Granola with Fruits</h1>
            <h1 className="text-gray-500 text-[15px] mb-8">Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</h1>
            <h1 className="tracking-[5px] text-xl py-5">Belgian Waffle</h1>
            <h1 className="text-gray-500 text-[15px] mb-8">Vanilla flavored batter with malted flour 7.50</h1>
            <h1 className="tracking-[5px] text-xl py-5">Scrambled eggs</h1>
            <h1 className="text-gray-500 text-[15px] mb-8">Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</h1>
            <h1 className="tracking-[5px] text-xl py-5">Blueberry Pancakes</h1>
            <h1 className="text-gray-500 text-[15px] mb-8">With syrup, butter and lots of berries 8.50</h1>
            
        </div>
        <div className="mt-5">
            <img className="rounded-[5px] opacity-70 w-full" src="https://www.w3schools.com/w3images/tablesetting.jpg" alt=""></img>
        </div>
      
    </div>
  )
}
