const createpost = (req,res)=>{  
 //business logic for creating a post
 res.send('post  account created succesfully');
}

const getepost = (req,res)=>{
 //business logic for getting a single post
 res.send('one post reterived successfully');
}

const getallpost = (req,res)=>{
 // business logic for getting all posts
 res.send('list of all post post reterived successfully ');
}

const updatepost = (req,res)=>{
// business logic for updating a post
res.send('post updated successfully');
}

const deletepost = (req,res)=>{
// business logic for deleting a post 
res.send('post deleted successfully');
}

export {createpost,getepost, getallpost,updatepost,deletepost}
