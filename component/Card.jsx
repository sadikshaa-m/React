

export default function Card({label, icons}) {
  return (
    <div className=" text-black p-2 shadow-2xl/60 w-[550px] rounded-2xl space-y-2.5 mb-4">

      <div className=" flex justify-center">
       {icons} 
        </div>
        <h1 className="text-center font-bold tracking-wider">{label}</h1>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam maxime culpa quo veritatis, facere ea, enim vel rem voluptatibus deserunt cum eius. Inventore at libero dignissimos aliquam dolorum eveniet!</p>
    </div>
  )
}
