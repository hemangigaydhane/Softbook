const createuser = (req,res) => {
    //bussiness logic for creating a user account 
    res.send ('user account created succesfully');
}
const getallusers = (req,res) => {
    //bussiness logic for getting all user 
    res.send ('list of all users retrieved successfully');
}

const getuser = (req,res) => {
    //bussiness logic for getting a single user
    res.send('one user retrived successfully');
}

const deleteuser = (req,res) => {
    //bussiness logic for deleting a user 
    res.send('user deleted successfully');
}

const updateuser = (req,res) => {
    //bussiness logic for updating a user 
    res.send('user updated successfully ');
}
const logoutuser = (req,res) => {
    //bussiness logic for logoutuser a user 
    res.send('user logged out successfully');
}

export {createuser ,
        getallusers ,
        getuser,
        deleteuser ,
        updateuser,
        logoutuser
    };







