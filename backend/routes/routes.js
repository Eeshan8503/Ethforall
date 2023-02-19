const router = require("express").Router();
const controller = require("../controller/controller");

router.post("/initUser", controller.initAccount);
/*
    To use this route 
    required arguements are:
        account number i.e the address of the user user to map his data
        example:
        {
            "account":"0x34...",
            "data":{
                food:"1",
                "car":"2"
                .
                .
            }
        }
        POST request

        returned value:
            Success or failure status
*/

module.exports = router;

router.post("/updateUser", controller.uploadFile);
/*
    To use this route
    the requred data is:
        account number i.e the address of the user user to map his data
        json updated data

        example:
        {
            "account":"0x34...",
            "data":{
                "food":4,
                "react":5,
                .
                .
                .
                .
            }
        }

        POST request
         returned value:
            Success or failure status
*/
router.get("/getUser", controller.getFile);
/*
        To use this route 
    required arguements are:
        account number i.e the address of the user user to map his data
        example:
        {
            "account":"0x34..."
        }
        GET request

        returned value:
            A json file containing the niche and the weight os the perticular user
*/
