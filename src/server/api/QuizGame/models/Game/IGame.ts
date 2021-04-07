import Alternative from "../Alternative/Alternative";
import Question from "../Question/Question";

export default interface IGame {
  id: String
  title: String
  questions: Question[]
}