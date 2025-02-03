const pool = require("../db/db");

const test = async () => {
    let msgData = {
        status: 0,
        message: "",
        data: [],
    };

    try {
        const data = await pool.query("select * from member", []);
        // console.log(data)
        msgData.status=200;
        msgData.message="성공"
        msgData.data=data[0]
        return msgData
    }catch (err){
        console.log("err: " + err)
    }
};

module.exports = {
    test,
}