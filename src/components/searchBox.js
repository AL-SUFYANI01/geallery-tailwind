import React, { useState } from 'react'

const SearchBox =({searchText}) =>{
    const[text, setText] = useState("");
    const onSubmit= (e) =>{
        e.preventDefault();  //to prevent page refresh after form submission
        searchText(text);   //calling the prop function passed down to us from App component
        };
    return (
        <div className="bg-gray-300 to-blue-200 border-b-2 border-blue-700 pb-1 pt-1 ">
            {""}
            <form onSubmit={onSubmit} className="flex justify-center items-center ">
                <div className="bg-white rounded md w-96 p-6">
                    <div className="flex justify-between mt-5 mb-2 pt-2 rounded-full border-2 py-1 px-3">
                        <input onChange={e => setText(e.target.value)} type="text" name="search" id="search" placeholder="Search..." className="flex-grow outline-none text-gray-300 focus:text-blue-500 "/>
                        <button type="submit" className="flex-grow outline-none text-gray-300 focus:text-blue-500">Search</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchBox;