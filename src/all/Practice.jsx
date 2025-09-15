
export default function Practice() {
     const post = {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"

};
    const comment =  {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"

  };
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
    <div className=" bg-linear-to-l from-blue-500 to-red-400 m-2 p-5 rounded-2xl ">
        <h1>{`USerID: ${post.userId}`}</h1>
        <h1>{`Id: ${post.id}`}</h1>        
        <h1 className="my-4 uppercase">{` ${post.title}`}</h1>       
        <h1 className="capitalize">{`${post.body}`}</h1>     
        <div className="flex justify-center mt-4">
        <div className="bg-linear-to-tr from-green-400 to-pink-300 w-[86%]  p-2 rounded-2xl ">
          <h1>{`Post ID: ${comment.postId}`}</h1>
          <h1>{`ID: ${comment.id}`}</h1>
          <h1>{`Name: ${comment.name}`}</h1>
          <h1>{`Email: ${comment.email}`}</h1>
          <h1 className="my-2.5">{`${comment.body}`}</h1>
          
         </div>

        </div>   
   
    </div>
  )
}
