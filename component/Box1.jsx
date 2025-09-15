

export default function Box1({label = "default", color="bg-gray-400"}) {
  return (
    <div className={`${color} p-5`}>
        <h1>{label}</h1>
      
    </div>
  )
}

