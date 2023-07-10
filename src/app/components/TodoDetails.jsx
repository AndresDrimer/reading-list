"use client";

import { TodoContext } from "@/contexts/TodoContext";
import { useContext, useState } from "react";

import { FiTrash2 } from "react-icons/fi";
import { AiOutlineCheck } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

import poster from "../../../public/TAPA_METMUT_DIGITAL.jpg";
import Image from "next/image";
import { BsPlus } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";


export default function TodoDetails({ todo }) {
  const { dispatch } = useContext(TodoContext);

  const [showMoreText, setShowMoreText] = useState(false);

  return (
    <>
      <li
        key={todo.id}
        className={`border-2 rounded text-xs md:text-md p-2 flex justify-between px-2 py-4 drop-shadow-lg overflow-hidden bg-white/10 ${
          todo.isChecked ? "bg-green-500/50" : "bg-transparent"
        }`}
      >
        <div>
          <h2 className="w-full ">
            <span
              className={`text-xl pr-6 leading-4 drop-shadow-lg  ${
                todo.isChecked && "line-through"
              }`}
            >
              {/*book.title.slice(0, -1)*/}
              {todo.title}
            </span>
            <br />
            <span
              className={`text-gray-300 text-xs ${
                todo.isChecked && "line-through"
              }`}
            >
              {todo.details}
            </span>{" "}
          </h2>
        </div>

        <div className="flex">
          {!todo.isChecked ? (
            <button
              className="w-[30px] h-[30px] bg-green-800 rounded-full p-2 scale-75 hover:scale-105"
              onClick={() => dispatch({ type: "CHECK_TODO", id: todo.id })}
            >
              <AiOutlineCheck />
            </button>
          ) : (
            <button
              className="w-[30px] h-[30px] bg-gray-800 rounded-full p-2 scale-75 hover:scale-105"
              onClick={() => dispatch({ type: "UNCHECK_TODO", id: todo.id })}
            >
              <RxCross1 />
            </button>
          )}

          <button
            className="w-[30px] h-[30px] bg-red-800 rounded-full p-2 scale-75 hover:scale-105"
            onClick={() => dispatch({ type: "REMOVE_TODO", id: todo.id })}
          >
            {" "}
            <FiTrash2 />{" "}
          </button>
        </div>
      </li>
    </>
  );
}
