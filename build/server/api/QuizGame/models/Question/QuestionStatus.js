"use strict";
var QuestionStatus;
(function (QuestionStatus) {
    QuestionStatus[QuestionStatus["Unanswered"] = 0] = "Unanswered";
    QuestionStatus[QuestionStatus["Skipped"] = 1] = "Skipped";
    QuestionStatus[QuestionStatus["Correct"] = 2] = "Correct";
    QuestionStatus[QuestionStatus["Wrong"] = 3] = "Wrong";
})(QuestionStatus || (QuestionStatus = {}));
