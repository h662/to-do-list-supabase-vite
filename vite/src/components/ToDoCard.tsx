import { FC } from "react";
import { IToDo } from "..";

interface ToDoCardProps {
  todo: IToDo;
}

const ToDoCard: FC<ToDoCardProps> = ({ todo }) => {
  return <li>{todo.content}</li>;
};

export default ToDoCard;
