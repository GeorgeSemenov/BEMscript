//Задаёт вопрос, возвращает ответ. Всё просто.
import readline from "readline-sync";
export default function (question = "Create/select block: ", defaultAnswer) {
  //Задаём вопрос
  let answer = readline.question(`${question}`);
  if ((typeof answer === "string" || !answer) && defaultAnswer !== undefined) {
    answer = answer.length === 0 ? defaultAnswer : answer;
  }
  return answer;
}
