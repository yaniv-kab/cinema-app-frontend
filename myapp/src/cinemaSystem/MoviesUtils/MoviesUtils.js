import ApiDAL from "../DALs/ApiDAL";
const MoviesURL = "https://mern-cinema-subswebserver.herokuapp.com/api/Movies"


const getMoviesAllData = async () => {
    return ApiDAL.getAllData(MoviesURL)
}
const getMovieById = (id) => {
    return ApiDAL.getById(`https://mern-cinema-subswebserver.herokuapp.com/api/movies/${id}`)
}
const addNewMovie = (movieToAdd) => {
    return ApiDAL.addData(MoviesURL, movieToAdd)
}
const updateMovie = (id, movieToUpdate) => {
    return ApiDAL.updateData(MoviesURL, id, movieToUpdate)
}
const deleteMovie = (id) => {
    return ApiDAL.deleteData(MoviesURL, id)
}
export default { getMoviesAllData, getMovieById, addNewMovie, updateMovie, deleteMovie }