const sendmessage =(req,res) =>{
    //business logic for sending a message 
    res.send('message send successfully ');
}

const getallmessage = (req,res) => {
    //business logic for getting all message 
    res.send('list of all  message reterived successfully');
}

const getmessage = (req,res) => {
    //business logic for getting a single message 
    res.send('one message reterived successfully')
}

const deletemessage = (req,res) => {
    //business logic for deleting a message 
    res.send('message deleted successfully');
}

const unsendmessage = (req,res) => {
    //business logic for unsending a message 
    res.send('message unsend successfully');
}

const readmessage = (req,res) => {
    //business logic for marking a message as read
    res.send("message read successfully");
}

export {sendmessage,getallmessage,getmessage,deletemessage,unsendmessage,readmessage} 