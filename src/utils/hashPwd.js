import bcrypt from "bcryptjs";


const hashPassward = async (inputPassward) => {
    const saltRounds = 10;
try{
    let  hashedPassward = await bcrypt.hash( inputPassward, saltRounds, );
    return hashedPassward 
} catch (error) {
    return error 
}
}

const verifyPwd = (inPwd , hashedPwd) =>{
    try{
    bcrypt.verify(inPwd, hashedPwd, (err,isMatch)=>{
        if (err){
            return false
        }

        return isMatch
    })
    } catch(error) {
       return false
    }
}


export  {hashPassward, verifyPwd}