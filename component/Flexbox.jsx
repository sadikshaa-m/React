
export default function Flexbox({label}) {
  return (
    <div className="w-50 h-70 border-1 border-[#0000003a] my-10 flex flex-col text-center hover:scale-110 hover:shadow-2xl/30 transition-all ease-in-out">
        <div className="h-20 bg-linear-to-r from-pink-400 to-red-500 flex items-center justify-center ">
      <h1 className="text-3xl text-white font-bold tracking-wide">{label}</h1>
      </div>
    <p className="p-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, cumque.</p>
    <button className="bg-linear-to-r from-pink-400 to-red-600 m-5 p-1.5 text-white text-[20px]">Read More</button>
    </div>
  )
}
