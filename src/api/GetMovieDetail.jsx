export const getMovieDetail = async({params}) => {
    const movieID = params.movieID;
    console.log(params);

    try {
        const response = await fetch(
            `https://www.omdbapi.com/?i=${movieID}&apikey=${
                import.meta.env.VITE_API_KEY
            }`
        );
        const data = response.json();

        return data;
    } catch (error) {
        console.log(error);
    }
}