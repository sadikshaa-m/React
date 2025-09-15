

export default function Object() {
    const person = ["ram", "hari", "sita"]
    const persons = [
    {id:1, name: 'ram', age:20},
    {id:2, name: 'shyam', age:30},
    {id:1, name: 'rita', age:50},
  ];

const posts = [
   {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  }
  ];

  const comments = [
    {
      "postId": 1,
      "id": 1,
      "name": "id labore ex et quam laborum",
      "email": "Eliseo@gardner.biz",
      "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
      "postId": 1,
      "id": 2,
      "name": "quo vero reiciendis velit similique earum",
      "email": "Jayne_Kuhic@sydney.com",
      "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
    },
    {
      "postId": 1,
      "id": 3,
      "name": "odio adipisci rerum aut animi",
      "email": "Nikita@garfield.biz",
      "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
    }
  ];

  const products = [
  {
      "id": 1,
      "title": "Essence Mascara Lash Princess",
      "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      "category": "beauty",
      "price": 9.99,
      "discountPercentage": 10.48,
      "rating": 2.56,
      "stock": 99,
      "tags": [
        "beauty",
        "mascara"
      ],
      "brand": "Essence",
      "sku": "BEA-ESS-ESS-001",
      "weight": 4,
      "dimensions": {
        "width": 15.14,
        "height": 13.08,
        "depth": 22.99
      },
      "warrantyInformation": "1 week warranty",
      "shippingInformation": "Ships in 3-5 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 3,
          "comment": "Would not recommend!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Eleanor Collins",
          "reviewerEmail": "eleanor.collins@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Very satisfied!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Lucas Gordon",
          "reviewerEmail": "lucas.gordon@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Highly impressed!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Eleanor Collins",
          "reviewerEmail": "eleanor.collins@x.dummyjson.com"
        }
      ],
      "returnPolicy": "No return policy",
      "minimumOrderQuantity": 48,
      "meta": {
        "createdAt": "2025-04-30T09:41:02.053Z",
        "updatedAt": "2025-04-30T09:41:02.053Z",
        "barcode": "5784719087687",
        "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
      ],
      "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
    },
    {
      "id": 2,
      "title": "Eyeshadow Palette with Mirror",
      "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
      "category": "beauty",
      "price": 19.99,
      "discountPercentage": 18.19,
      "rating": 2.86,
      "stock": 34,
      "tags": [
        "beauty",
        "eyeshadow"
      ],
      "brand": "Glamour Beauty",
      "sku": "BEA-GLA-EYE-002",
      "weight": 9,
      "dimensions": {
        "width": 9.26,
        "height": 22.47,
        "depth": 27.67
      },
      "warrantyInformation": "1 year warranty",
      "shippingInformation": "Ships in 2 weeks",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Great product!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Savannah Gomez",
          "reviewerEmail": "savannah.gomez@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Awesome product!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Christian Perez",
          "reviewerEmail": "christian.perez@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Poor quality!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Nicholas Bailey",
          "reviewerEmail": "nicholas.bailey@x.dummyjson.com"
        }
      ],
      "returnPolicy": "7 days return policy",
      "minimumOrderQuantity": 20,
      "meta": {
        "createdAt": "2025-04-30T09:41:02.053Z",
        "updatedAt": "2025-04-30T09:41:02.053Z",
        "barcode": "9170275171413",
        "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp"
      ],
      "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp"
    },
]

   const per = [
    { id: 1, name: 'ram', habits: ['dance', 'sing'] },
    { id: 2, name: 'rita', habits: ['code', 'movies'] },
  ];




  
  return (
    <div className="p-5 rounded-2xl m-2 ">
      {person.map((person, i) => {
        return <h1 className="uppercase bg-green-200 pl-2" key={i}>{person}</h1>
      })}
      {persons.map((persons) => {
        return <div className="bg-orange-200 pl-2 m-1"  key={persons.id}>
        <h1>ID:{persons.id}</h1> 
        <h1>Name:{persons.name}</h1> 
       </div>
      })}
        {posts.map((p) => {
            return <div key={p.userId} className="bg-fuchsia-200 p-2">
             <h1>{p.userId}</h1>
             <h1>{p.body}</h1>
            </div>
        })}
        {comments.map((c) => {
            return <div key={c.id} className="mb-2 bg-amber-300 p-2 rounded-2xl">
                <h1>PostId: {c.postId}</h1>
                <h1>Name: {c.name}</h1>
                <h1>Email: {c.email}</h1>
                <h1 className="capitalize"> {c.body}</h1>
            </div>
        })}
        {per.map((p) => {
            return <div key={p.id} className="bg-red-400 p-2 rounded-2xl mb-1.5 ">
                <h1>ID: {p.id}</h1> 
                <h1>Name: {p.name}</h1> 
                <h1><strong>Habits</strong></h1>
                <div className="flex gap-3">
                <h1> 1: {p.habits[0]}</h1> 
                <h1>2: {p.habits[1]}</h1> 
                </div>
            </div>
        })}

        {products.map((product) => {
        
            return <div key={product.id} className="bg-purple-300 my-3 p-2 rounded-2xl  shadow-[0_0_15px_rgba(0,0,0,0.2)]">
                <div className="flex justify-center">
                <img src={product.thumbnail} alt=""/>
                </div>
                <h1 className="text-center  bg-amber-100"><strong>{product.title}</strong></h1>
                <h1 className="text-center mb-4 bg-amber-100"><strong>Price: ${product.price}</strong></h1>
                
                <p className="mb-3"><strong>Reviews:</strong></p>
                {product.reviews.map(({comment, reviewerName, reviewerEmail, rating, date}, i) => {
                return <div key={i} className="mb-2 bg-amber-200 p-2 rounded-2xl">
                <p>Reviewer Name: {reviewerName}</p>
                <p>Reviewer Email: {reviewerEmail}</p>
                <p>Rating: {rating}</p>
                <p>Comments: {comment}</p>

                </div>
                })}

                <div className="flex justify-center">
                    <img src={product.meta.qrCode} alt="" />
                </div>
                
                </div>
                
                

            // </div>
        })}

    </div>
  )
}
