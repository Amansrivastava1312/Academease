const { getUser } = require("../services/auth");

const restrictToLoggedinUserOnly = (req, res, next) => {
    const id = req.cookies.uid;

    if (!id) {
        return res.status(400).json({
            success: "false",
            error:"Please login to acces the particular route"
        })
    }

    const user = getUser(id);
    console.log(user);

    if (!user) {
        return res.status(400).json({
            success: "false",
            error:"Please login to acces the particular route"
        })
    }
    req.user = user[0];

    next();
}

module.exports = restrictToLoggedinUserOnly;