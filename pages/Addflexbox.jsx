import Flexbox1 from "../component/Flexbox1";

export default function Addflexbox() {
  return (
    <div className="bg-gray-200 flex justify-center p-5">
    <div className="grid grid-cols-4 gap-3 w-[80%]">
        
      <Flexbox1 className="col-span-2" image={"https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1000&auto=format&fit=crop&q=60"} height={"h-55"} text={"text-2xl"} topic={"International Artist Feature:Malaysia"} foot={"MARY ADAMS"}/>
      
      <Flexbox1 image={"https://images.unsplash.com/photo-1513682121497-80211f36a7d3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fHww"} 
      topic={"How to Conducr Remote Usability Testing"} foot={"HARRY POTTER"}/>
      <Flexbox1 image={"https://images.unsplash.com/photo-1619531774233-a3d3c032d741?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zmxvd2VyeSUyMGdpcmx8ZW58MHx8MHx8fDA%3D"} topic={"Created by You, July Edition"} label={"Learning web development with React and Tailwind is exciting because it combines creativity, problem-solving."} foot={"MELODY NIEVES"}/>
      <Flexbox1 image={"https://images.unsplash.com/photo-1607337202714-a88f7abbdee7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} topic={"How to Code a Scrolling  Website"} label={"Aliens traveled across galaxies, searching planets for knowledge, encountering mysteries, adapting swiftly, and leaving behind extraordinary signs of cosmic wisdom."} foot={"KEZZ BRACEY"} />
      <Flexbox1 image={"https://images.unsplash.com/photo-1562527372-00a214490a28?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RyYW5nZXIlMjB0aGluZ3N8ZW58MHx8MHx8fDA%3D"} topic={"How to Create a Stranger Things Text Effect in adobe photoshop"} foot={"ROSE"}/>
      <Flexbox1 image={"https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVzaW5lc3N8ZW58MHx8MHx8fDA%3D"} topic={"5 Inspirational Business Portraits and How to Make Your Own"} foot={"MARK GARRY"}/>
      <Flexbox1 image={"https://plus.unsplash.com/premium_photo-1670745084868-7b4f727cc934?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} topic={"Notes from Behind the Firewall: The State of web design In China"} foot={"KENDRA SCHAEFER"}/>
      
    </div>
    </div>
  )
}
