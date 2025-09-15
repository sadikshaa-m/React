
export default function Button({label, color}) {
  return (
    <div>
            <button className={`${color} border-2 p-3 hover:scale-90 hover:text-[25px] hover:text-white hover:text-shadow-[0_0_20px_#00f]`}>{label}</button>
            

    </div>
  )
}
