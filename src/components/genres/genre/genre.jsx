import './genre.css'
const Genre = ({genre}) => {
    const redirectToGenre = () => {
        const genreUrl = `https://xyt.com/${genre}`;
        window.location.href = genreUrl;
    };
    return ( 
        <div className="genre" onClick={redirectToGenre}>
            <h1>{genre}</h1>
        </div>
     );
}
 
export default Genre;