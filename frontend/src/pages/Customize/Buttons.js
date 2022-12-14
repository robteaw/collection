import React, { useState, useEffect } from "react";
import Axios from "axios";
import { FaPlus, FaEdit, FaTimes, FaSearch } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";

export default function Buttons() {
  const [listOfMovies, setListOfMovies] = useState([]);
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/getMovies").then((response) => {
      setListOfMovies(response.data);
    });
  }, []);

  // Paginations
  const [pageNumber, setPageNumber] = useState(0);

  const moviesPerPage = 12;
  const pagesVisited = pageNumber * moviesPerPage;

  const displayMovies = listOfMovies
    .slice(pagesVisited, pagesVisited + moviesPerPage)
    .sort((a, b) => (a.name > b.name ? 1 : -1)) // sort by name
    .map((movie) => {
      return (
        <div className="card">
          <h3>{movie.name}</h3>
          <p>{movie.genre}</p>
          <div className="button_container_2">
            <button
              className="edit"
              onClick={() => {
                updateMovie(movie._id);
              }}
            >
              <FaEdit />
            </button>
            <button
              className="delete"
              onClick={() => {
                deleteMovie(movie._id);
              }}
            >
              <FaTimes />
            </button>
          </div>

          <img src={movie.image} alt="" />
        </div>
      );
    });

  const pageCount = Math.ceil(listOfMovies.length / moviesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // Add movie
  const createMovie = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/createMovie", {
      name,
      genre,
      image,
    }).then((response) => {
      setListOfMovies([
        ...listOfMovies,
        { _id: response.data._id, name, genre, image },
      ]);
    });
  };

  // Edit movie
  const updateMovie = (id) => {
    const newName = prompt("Enter new name: ");

    Axios.put("http://localhost:3001/update", {
      newName: newName,
      id: id,
    }).then((response) => {
      setListOfMovies(
        listOfMovies.map((movie) => {
          return (movie._id = id
            ? { _id: id, name: movie.name, genre: genre }
            : movie);
        })
      );
    });
  };

  // Delete movie
  const deleteMovie = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      Axios.delete(`http://localhost:3001/delete/${id}`).then(() => {
        setListOfMovies(
          listOfMovies.filter((movie) => {
            return movie._id !== id;
          })
        );
      });
    }
  };

  // Click to link
  let navigate = useNavigate();

  return (
    <section>
      <div className="add_data">
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Genre"
          onChange={(e) => {
            setGenre(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Image Url"
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <div className="button_container">
          <button className="add" onClick={createMovie}>
            <FaPlus />
          </button>
          <button
            className="search"
            onClick={() => {
              navigate("/");
            }}
          >
            <FaSearch />
          </button>
        </div>
      </div>

      <div className="card_container">{displayMovies}</div>
      <div>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginateBtn"}
          previousLinkClassName={"previousBtn"}
          nextLinkClassName={"nextBtn"}
          disabledClassName={"paginateDisabled"}
          activeClassName={"paginateActive"}
        />
      </div>
    </section>
  );
}
