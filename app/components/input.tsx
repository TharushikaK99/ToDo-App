"use client";

import { useState } from "react";

const Input = () => {
    const [ value, setValue ] = useState("");

    const handleAdd = async (name: string) => {
        const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ name })
        }
        const res = await fetch('http://localhost:3000/api/todos', options);
        const todo = await res.json();
        console.log(todo);

        setValue("");
    }

    return ( 
        <div className="w-full flex justify-center gap-5 mb-12">
            <input 
                type="text" 
                name="todo" 
                className="w-68 justify-center border-b border-gray-100 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-200 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-96  lg:rounded-xl lg:border lg:bg-gray-200 lg:px-4 lg:py-3 lg:dark:bg-zinc-800/30"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button 
                onClick={() => handleAdd(value)} 
                className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 dark:hover:border-gray-200"
            >
                Add
            </button>
        </div>
     );
}
 
export default Input;