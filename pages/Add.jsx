import Flexbox from "../component/Flexbox";


export default function Add() {
  return (
    <div className="flex justify-evenly flex-wrap ">
        <Flexbox label={"React"}/>
        <Flexbox label={"Vue"}/>
        <Flexbox label={"Angular"}/>
        <Flexbox label={"JQuery"}/>
    </div>
  )
}
