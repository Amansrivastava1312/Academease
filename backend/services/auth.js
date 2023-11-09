const jwt = require("jsonwebtoken");

const secrete_key = "yash@12213n*78bhewbr87&^&*^(*";

function setUser(user){

    return jwt.sign(
        {
        _id: user._id,
        email: user.email,
        },
        secrete_key
    );
}
function getUser(token){
    if (!token) return null;
    try {
        return jwt.verify(token, secrete_key);
    } catch (error) {
        return null;
    }
    
}

module.exports = { getUser, setUser };