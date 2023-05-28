"use client";
import { FiTrash2 } from "react-icons/fi";
import { BookContext } from "@/contexts/BookContext";
import { AlertContext } from "@/contexts/AlertContext";
import { useContext, useState } from "react";
import Alert from "./Alert";
import poster from "../../../public/TAPA_METMUT_DIGITAL.jpg";
import Image from "next/image";
import { BsFileMinus, BsFileMinusFill, BsPlus } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";

export default function BookDetails({ book }) {
  const { dispatch } = useContext(BookContext);
  const { isAlertOn, toggleAlert } = useContext(AlertContext);
  const [showMoreText, setShowMoreText] = useState(false)

  function handleTrashBin(id) {
    toggleAlert();
    console.log("tocado");
  }

  return (
    <>
      <li
        key={book.id}
        className="border-2 rounded text-xs md:text-md p-2 flex  flex-col justify-between px-4 py-4 drop-shadow-lg"
      >
        <h2>
          <span className="text-xl pr-6 leading-4 drop-shadow-lg">
           {/*book.title.slice(0, -1)*/}
           {book.title}
          </span>
          <br />{" "}
          <span className="text-gray-300 text-xs ">de {book.author}</span>
        </h2>
        <div className="my-4">
          <Image src={poster} className="rounded drop-shadow-lg" alt="poster" />
        </div>
        <p className="font-thin">
          comentario: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sint, cum esse quibusdam placeat, illo aspernatur fugit, repellat et
          maxime doloremque quo qui maiores quam quisquam laborum. Tempora
          suscipit voluptatibus laborum.{" "}
        </p>{" "}
        <div className="flex justify-end -mt-4 bg-transparent z-10">
          { !showMoreText ? <BsPlus className="w-[30px] h-auto fill-violet-800 hover:scale-110 transition duration-900" onClick={()=>setShowMoreText(prev=>!prev)} /> : <AiOutlineMinus className="w-[30px] h-auto fill-violet-800 hover:scale-110 transition duration-900" onClick={()=>setShowMoreText(prev=>!prev)}/>}
        </div>
       
        <p className= {showMoreText ? "font-thin" : "hidden"}>
          Sequi maxime sapiente recusandae perspiciatis, corrupti enim sit dicta
          possimus. Repellendus iusto dicta eum ea suscipit eaque, voluptates
          perferendis accusamus cum vel. Ullam suscipit praesentium totam, magni
          sunt amet accusamus? Impedit deserunt quae placeat quod sapiente
          corporis suscipit nihil adipisci error voluptatem voluptates odit
          deleniti quas cum labore sed, magni dolorem maiores expedita facilis
          quidem illum dolores consequuntur? Quaerat, blanditiis. Nemo aut saepe
          tempora voluptates quidem nisi earum numquam natus, quas voluptate
          perferendis, nostrum iure nesciunt ea repellendus quos quibusdam magni
          vel, sed ut. Sapiente nostrum enim tempora error sequi. Doloremque,
          nam? Harum quidem saepe suscipit laborum? Delectus nisi omnis nostrum
          expedita incidunt, dicta, culpa ipsam ipsa, ex ratione accusantium
          maxime illum ea perferendis animi reprehenderit error quae tempore.
          Ea?
        </p>
        <div className="mt-4">
          <div className="w-full flex items-center  justify-end space-x-2">
            <p className="text-gray-400">215p, tapa dura, blahblah</p>
            <p
              className={`text-xs w-[50px] border-2 border-gray-600 rounded-full px-2  ${
                book.isAvailable ? "" : "line-through text-gray-500 bg-gray-600"
              }`}
            >
              {book.isDigital ? "digital" : "físico"}
            </p>

            <button
              className="bg-red-800 rounded-full p-2 scale-75 hover:scale-105"
              onClick={() => dispatch({type: "REMOVE_BOOK", id: book.id})}
            >
              <FiTrash2 />
            </button>
          </div>
        </div>
      </li>
    </>
  );
}
