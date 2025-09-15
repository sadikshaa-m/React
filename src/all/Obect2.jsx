

export default function Obect2() {

const comments = [
    {
      "id": 1,
      "body": "This is some awesome thinking!",
      "postId": 242,
      "likes": 3,
      "user": {
        "id": 105,
        "username": "emmac",
        "fullName": "Emma Wilson"
      }
    },
    {
      "id": 2,
      "body": "What terrific math skills you're showing!",
      "postId": 46,
      "likes": 4,
      "user": {
        "id": 183,
        "username": "cameronp",
        "fullName": "Cameron Perez"
      }
    },
    {
      "id": 3,
      "body": "You are an amazing writer!",
      "postId": 235,
      "likes": 2,
      "user": {
        "id": 1,
        "username": "emilys",
        "fullName": "Emily Johnson"
      }
    }
  ];

  return (
    <div>
      {comments.map((com) => {
        return <div className="bg-gray-300 p-2" key={com.id}>
            <div className="bg-amber-200 mb-2 rounded-2xl p-2 ">

            <h1>UserName: {com.user.username}</h1>
            <h1>Name: {com.user.fullName}</h1>
            <h1>Comment: {com.body}</h1>
            <h1>Likes: {com.likes}</h1>
        </div>
        </div>
      })}
    </div>
  )
}
