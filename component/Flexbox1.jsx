
export default function Flexbox1({image,topic,label,foot,height, className, text}) {
  return (
    
    <div className={` w-full border-1 border-[#00000035] flex flex-col ${className} bg-white `}>
        <div className="flex flex-col">
      <img className={`h-40 w-full object-cover ${height}`} src={image}></img>
      </div>
      <div className=" p-3 flex-1 max:sm-hidden">
        <h1 className={`font-bold ${text}`}>{topic}</h1>
        <p className="text-sm py-1">{label}</p>
      </div>
      <div className="text-xs p-3 text-gray-500 font-serif flex flex-col bottom-0">
        <footer>{foot}</footer>
      </div>
    </div>
    
  )
}
