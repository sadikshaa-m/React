

export default function first() {
  return (
    <div>
        <div className=" items-center  h-100 w-full bg-[#b8b6b6] grid grid-cols-2 absolute left-0 right-0 bottom-0 top-0 m-auto"> 
      <div className=" flex mx-auto justify-center items-center h-70 w-150 rounded-xl shadow-xl/70 shadow-black absolute left-0 right-0 bottom-0 top-0 m-auto">
    <div className=" h-76 w-50 rounded-l-lg">
      <img className= "rounded-l-xl h-76 w-full mx-autoobject-cover" src="https://plus.unsplash.com/premium_photo-1683140435505-afb6f1738d11?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8eWVsbG93JTIwbWFufGVufDB8fDB8fHww "></img>
    </div>
    <div className="bg-black text-white rounded-r-xl h-76 w-100 pl-8 p-4 ">
       <h2 className=" text-2xl mt-1.5 -tracking-0.5">KILL BILL: VOL.1</h2>
      <nav className="flex space-x-6 mt-1 text-[15px] text-[gray]">
        <p>2003</p>
        <p>111min</p>
        <p>Action</p>
      </nav>
      <nav className="flex space-x-2 mt-1">
     <FaStar className="text-[#dcdada]" />
     <FaStar className="text-[#dcdada]" />
     <FaStar className="text-[#dcdada]" />
     <FaStar className="text-[#dcdada]" />
     <FaStar className="text-[#dcdada]" />
     </nav>
       
      <p className="line-clamp-5 overflow-hidden text-[12px] text-justify w-80 mt-2 mb-2.5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia recusandae quis corporis labore numquam tempora necessitatibus eius laboriosam consequuntur inventore. Molestiae et soluta doloribus quis unde officia hic, blanditiis quaerat possimus vitae consequuntur modi eveniet voluptate culpa rem quisquam natus molestias rerum, in quod, maiores numquam? Adipisci excepturi repellendus placeat. Quas ducimus sint similique architecto?</p>
        
      <a className="text-amber-500" href="">Read more</a>
       <br/>
       <button className=" flex  border-2 border-amber-400 text-amber-500 text-[13px] p-1 mt-3 rounded-[5px] w-38 "><FaPlay className="mr-[15px] mt-0.5 ml-3"></FaPlay> WATCH TRAILER</button>
    </div>
    </div>
   
 </div>
    </div>
  )
}
