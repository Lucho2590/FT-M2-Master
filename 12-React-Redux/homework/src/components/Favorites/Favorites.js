import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { removeMovieFavorite } from "../../actions";
import './Favorites.css';


export class ConnectedList extends Component {

  render() {
    return (
        <div>
         <h2>Películas Favoritas</h2>
          <ul>
            {/* Aqui deberias poner tu lista de peliculas! */}
            {
              this.props.movies?.map(m =>(
              <div key={m.id}>
                <Link to={`/movie/${m.id}`}>
                  <li>{m.title}</li>
                </Link>
                <button onClick={() => this.props.removeMovieFavorite(m.id)}>X</button>
              {/* <button onClick={() => this.props.addMovieFavorite({title: m.Title, id: m.imdbID})}> Add to Favorite </button> */}
              </div>
              ))
            } 
          </ul>
        </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    movies: state.moviesFavourites
  }
}

export default connect(mapStateToProps,{removeMovieFavorite})(ConnectedList);
