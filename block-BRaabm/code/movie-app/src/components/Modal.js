import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true,
    };
  }
  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    const movie = this.props.movie;

    return movie && this.state.showModal ? (
      <div className="modal">
        <div className="flex flex-start">
          <div className="left flex-45">
            <h2 className="title">{movie.Title}</h2>
            <div className="year">
              <span className="tag">Year:</span> {movie.Year}
            </div>
            <div className="rated">
              <span className="tag">Rated:</span> {movie.Rated}
            </div>
            <div className="released">
              <span className="tag">Released:</span> {movie.Released}
            </div>
            <div className="runtime">
              <span className="tag">Run time:</span> {movie.Runtime}
            </div>
            <div className="genre">
              <span className="tag">Genre:</span> {movie.genre}
            </div>
            <div className="director">
              <span className="tag">Director:</span> {movie.Director}
            </div>
            <div className="plot">
              <span className="tag">Plot:</span> {movie.plot}
            </div>
            <div className="language">
              <span className="tag">Language:</span> {movie.language}
            </div>
          </div>
          <div className="right flex-45">
            <div className="writer">
              <span className="tag">Writer:</span> {movie.Writer}
            </div>
            <div className="actors">
              <span className="tag">Actors:</span> {movie.Actors}
            </div>
            <div className="country">
              <span className="tag">Country:</span> {movie.Country}
            </div>
            <div className="awards">
              <span className="tag">Awards:</span> {movie.Awards}
            </div>
            <div className="poster">
              <span className="tag">Poster:</span> poster
            </div>
            <div className="meta-score">
              <span className="tag">Meta Score:</span> {movie.Metascore}
            </div>
            <div className="imdb-rating">
              <span className="tag">imdb Rating:</span> {movie.imdbRating}
            </div>
            <div className="imdb-votes">
              <span className="tag">imdb Votes:</span> {movie.imdbVotes}
            </div>
            <div className="imdb-id">
              <span className="tag">imdb ID:</span> {movie.imdbID}
            </div>
            <div className="type">
              <span className="tag">Type:</span> {movie.Type}
            </div>
            <div className="response">
              <span className="tag">Response:</span> {movie.Response}
            </div>
          </div>
        </div>
        <div className="gallery flex flex-wrap flex-start">
          {movie.Images.map((image, i) => {
            return (
              <div className="image">
                <img key={i} src={image} alt={movie.title} />
              </div>
            );
          })}
        </div>

        <button className="close" onClick={() => this.handleClose()}>
          X
        </button>
      </div>
    ) : (
      ''
    );
  }
}
export default Modal;
