
import Navbar from './components/navbar'
import SearchBox from './components/searchBox';
import ImageCard from './components/imageCard';
import { useState, useEffect } from "react";

const App = () => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchWord, setSearchWord] = useState('');

    useEffect(() => {
        fetch(
            `https://pixabay.com/api/?key=41360471-87cfd9c0ef0f0a7e896724488&q=${searchWord}=photo&pretty=true&per_page=20`
        )
            .then((res) => res.json())
            .then((data) => {
                setImages(data.hits);
                setIsLoading(false);
            })
            .catch((err) => console.log(err));
    }, [searchWord]);


    return (
        <>
            <div>
                <Navbar />
                <SearchBox searchText={(text) => setSearchWord(text)} />

                {!isLoading && !images.length && (<h1 className='text-6xl text-black'>
                    Nothing Found
                </h1>
                )}
                {isLoading ? (<h1 className='text-6xl text-black'>
                    Loading...
                </h1>
                ) : <div className="grid grid-cols-3 gap-0  bg-gradient-to-r from-blue-700 via-gray-500 to-red-700">
                    {images.map((image, index) => (
                        <ImageCard key={index} image={image} />
                    ))}
                </div>}
            </div>
        </>
    );
};

export default App