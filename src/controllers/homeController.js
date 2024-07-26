const postLogin = async (req,res)=>{
    const { username, password } = req.body;
    if(username !== null && password !== null){
        res.status(200).json({ message: 'Recieved information' });
    }else{
        res.status(401).json({ message: 'Error'});
    }
}

module.exports = {
    postLogin,
}