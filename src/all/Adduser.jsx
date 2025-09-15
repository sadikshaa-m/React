
export default function Adduser() {
    const user = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  };


  return (
    <div className="bg-linear-to-bl from-yellow-300 to-pink-400 rounded-2xl p-5 text-black mt-5 ">
    
      <h1><strong> UserID:</strong> {`${user.id}`}</h1>
      <h1><strong>Name: </strong>{`${user.name}`}</h1>
      <h1><strong>UserName: </strong>{`${user.username}`}</h1>
      <h1><strong>Email: </strong>{`${user.email}`}</h1>
      <h1 className="font-bold">Address:</h1>
      <h1 className="ml-5">{`Street: ${user.address.street}`}</h1>
      <h1 className="ml-5">{`Suite: ${user.address.suite}`}</h1>
      <h1 className="ml-5">{`City: ${user.address.city}`}</h1>
      <h1 className="ml-5">{`Zip-Code: ${user.address.zipcode}`}</h1>
      <h1 className="font-bold">Geo: </h1>
      <h1 className="ml-10">{`Lat: ${user.address.geo.lat}`}</h1>
      <h1 className="ml-10">{`Lng: ${user.address.geo.lng}`}</h1>
      <h1><strong>Phone: </strong>{`${user.phone}`}</h1>
      <h1><strong>Website: </strong>{`${user.website}`}</h1>
      <h1><strong>Company: </strong></h1>
      <h1 className="ml-10">Name: {`${user.company.name}`}</h1>
      <h1 className="ml-10">Catch-phrase: {`${user.company.catchPhrase}`}</h1>
      <h1 className="ml-10">Bs: {`${user.company.bs}`}</h1>

    </div>



    
  )
}
