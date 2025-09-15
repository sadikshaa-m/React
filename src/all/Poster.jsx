import { FaBars, FaLine, FaSadCry, FaSmile, FaPlay, FaCameraRetro, FaSave, FaBookmark, FaShare, FaShareAlt } from "react-icons/fa";

export default function Poster() {
  return (
    <div className=" mt-10 flex justify-center bg-gray-200 ">
        <div className="flex flex-col  bg-amber-100 shadow-xl shadow-black">
            <div className="relative">
                <FaBars className="absolute size-6 top-1.5 left-2.5"/>
                <img className="object-cover w-100 h-80" src="https://plus.unsplash.com/premium_photo-1722018576626-dc10f32a86f4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXN0cm9udXR8ZW58MHx8MHx8fDA%3D"></img>
            </div>
            <div className="bg-[#1A1421] h- screen w-100 pt-2.5 px-5 pb-2.5">
                <h1 className="text-3xl tracking-wider text-amber-50 m">Interstellar</h1>
                <p className="tracking-wide text-[14px] text-gray-400">PG-13/ 2h49min/ Adventure, Drama, Sci-Fi</p>
                <nav className="text-white flex gap-48">
                    <h1 className="mt-5 text-[18px]">SUMMARY</h1>
                    <div className="flex gap-1.5 text-[13px] mt-5">
                    <FaSmile className="text-red-500 mt-1"/>
                    <p className=" text-red-500 ">123</p>
                    <FaSadCry className="text-red-500 mt-1 "/>
                    <p className=" text-red-500 ">4</p>
                    </div>
                </nav>
                <p className="text-gray-400 text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, praesentium molestias esse, aspernatur aliquam corrupti ducimus vero sunt facilis autem dolor veniam eligendi harum. Accusamus enim facilis cum, quae nisi quaerat dolorum quibusdam, magnam aliquam quisquam impedit. Impedit consectetur voluptate velit ipsa repellat?</p>
                <p className="text-gray-400 mt-2 text-[15px] tracking-tight"><em>Matthew McConaughey, Anne Hathway, Jessica Chastain</em></p>
                <nav className="flex text-red-500 pb-3 gap-25 mt-5">
                    <button className=" h-7 text-[13px] flex gap-1.5 border-2 px-1.5 py-1 rounded-[7px]"><FaPlay className="size-3 mt-1"  ></FaPlay> WATCH TRAILER</button>
                    <div className="flex gap-5">
                    
                    <FaSave className="size-7" ></FaSave>
                    <FaBookmark className="size-7"/>
                    <FaShareAlt className="size-7"/>
                    </div>
                </nav>
            </div>
        </div>
      
    </div>
  )
}
