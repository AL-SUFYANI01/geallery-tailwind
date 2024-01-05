import React from 'react';

const ImageCard = ({ image }) => {
    const tags = image.tags.split(",")
    return (
        <div className='rounded m-1 border-2 bg-gray-300'>
            <div className="
            max-w-sm overflow-hidden 
            shadow-lg shadow-black bg-gray-300  rounded m-1 hover:scale-90 transition-transform duration-300"
            >
                <img className="w-full cursor-not-allowed" src={image.webformatURL} alt="541" />
                <div className="px-6 py-4">
                    <div className="
                  font-bold text-xl
                text-purple-500"
                    >
                        Photos By {image.user}
                    </div>
                    <ul>
                        <li>
                            <strong>Views: </strong>
                            {image.views}
                        </li>

                        <li>
                            <strong>Downloads: </strong>
                            {image.downloads}
                        </li>

                        <li>
                            <strong>Likes: </strong>
                            {image.likes}
                        </li>
                    </ul>
                </div>
            </div>

            <div className="rounded" >
                {tags.map((tag, index) => (
                    <span key={index} className=" x-w-sm overflow-hidden 
                        shadow-lg shadow-black
                        inline-block text-gray-700
                        bg-gray-200 text-sm mr-2 font-bold
                         mt-3 ml-1  py-1 px-1 rounded-full  hover:shadow-gray-500"
                    >
                        #{tag}
                    </span>
                ))}
            </div>

        </div>
    )
}

export default ImageCard;