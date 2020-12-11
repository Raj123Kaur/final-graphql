# 3695-Final

# Instruction to start
 Run npm install and then node app.js to start the API Server

# Queries and Mutations

# 1.) Get a post by id
query{
  getPostbyID(id: " 72392"){
    user
    topic
    body
    comment
  }
}

# 2. Get a post by topic
query{
  getPostByTopic(topic: "Dance"){
    id
    body
    user
    comment
  }
}

# 3.	Create a post:
mutation{
  createPost(
    id: "348479",
    topic: "Music",
    user: "Arshdeep Randhawa",
    body: "Body",
    comment: "Comment"
  )
  {
  id
}

  }


