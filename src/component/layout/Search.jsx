import "./Search.css"

export const SearchMovie = ({setSearchMovie, searchMovie, setMovieName}) => {
    const handleMovieName = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            setMovieName(searchMovie);
        }
    }

    return (
        <form>
                <div class="fx fx-gap">
                    <div>
            <input type="text" placeholder="Search Movie" value={searchMovie} onChange={(e) => setSearchMovie(e.target.value)} onKeyDown={handleMovieName}/>
                    </div>
                    <div id="search-icon">
                    <button type="submit" className="search-button">
                        <div id="search-icon-circle"></div>
                        <span></span>
                    </button>
                    </div>
                </div>
                </form>
    );
}