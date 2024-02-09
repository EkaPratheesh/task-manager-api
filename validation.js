class Validation {
    static validateTaskInfo(taskInfo) {
        if(taskInfo.hasOwnProperty("id") &&
            taskInfo.hasOwnProperty("title") &&
            taskInfo.hasOwnProperty("description") &&
            taskInfo.hasOwnProperty("completed") ){
            return {
                "status" : true,
                "message" : "Task has been validated"
            };
        } 
        return {
            "status" : false,
            "message" : "Task validation failed"
        }
    }
}
module.exports = Validation;