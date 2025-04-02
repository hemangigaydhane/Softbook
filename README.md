# Softbook
SoftBook is a dynamic social networking platform designed to bring people together in a meaningful way. Whether you're looking to connect with friends, share your thoughts, or explore new communities, SoftBook provides a seamless and engaging experience.


## Features
Personalized Profiles –
-  Customize your profile with photos, bios, and interests.

Real-Time Feeds – 
- Stay updated with posts, stories, and trending topics. 

 Messaging & Groups –
 - Chat privately or engage in community discussions.

Secure & Private – 
- Your data and privacy are our top priorities.

 Seamless Media Sharing – 
 - Share images, videos, and updates effortlessly

## Tech Stack

- Node.js
- Express.js
- dotenv
- mongoose
- nodemon

## API EndPoints

Users
- /api/vi/user/create
- /api/v1/user/getall
- /api/v1/user/get/:id
- /api/v1/user/delete/:id
- /api/v1/user/update/:id
 -/api/v1/user/logout


POST 
- /api/v1/post/create
- /api/v1/post/delete/:id
- /api/v1/post/update/:id
- /api/v1/post/getall
- /api/v1/post/get/:id 

 -/api/v1/post/:postId/like
 -/api/v1/post/:postId/unlike

 -/api/v1/post/:postId/comment/:commentId/like
 -/api/v1/post/:postId/comment/:commentId/unlike

 -/api/v1/post/:postId/comment(same for create and delete)
 -/api/v1/post/:postId/comment/:commentId/comment (same for create and delete)



Message 
- /api/v1/message/send
- /api/v1/message/unsend:/id
- /api/v1/message/get/:id
- /api/v1/message/getall
- /api/v1/message/read:/id
- /api/v1/message/delete:/id




## Security Consideration

