class Validation {
    static validateTaskInfo(taskInfo) {
        if(taskInfo.hasOwnProperty('title') &&
        taskInfo.hasOwnProperty('description') &&
        taskInfo.hasOwnProperty('completed') 
        ) {
            return {
                "status": true,
                "message": "Task info has been validated."
            }
        } else {
            return {
                "status": false,
                "message": "Task info sent is malformed, please provide all the required parameters."
            }
        }
    }

   /*  static validateTaskInfoValues(taskInfo) {
        if(taskInfo['title'] !== "" &&
        taskInfo['description'] !== "" &&
        typeof taskInfo['completed'] === "boolean" &&
        taskInfo['created'] !== "" &&
        taskInfo['priority'] !== "") {
            return {
                "status": true,
                "message": "Task info has been validated."
            }
        } else {
            return {
                "status": false,
                "message": "Task info sent is malformed, please provide the paramter in the right format."
            }
        }
    } */

}
module.exports = Validation;