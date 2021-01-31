import React from "react";
import { createPages } from "./controller";
import MovieCardLayout from "./movie-card-layout";
import MovieDetailsLayout from "./movie-details-layout";

// class FeedLayout extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       movies: [],
//     };
//   }

//   componentDidMount() {
//     createPages('bill').then((data) => {
//       let movies = JSON.parse(data.data.posts).results;
//       console.log(movies);
//       this.setState({ movies: movies });
//     });
//   }

//   render() {
//     return (
//       <div class="col-md-9">
//         <div class="row">
//           {this.state.movies.map((movie) => {
//             return (
//               <MovieCardLayout>
//                 <MovieDetailsLayout>{movie}</MovieDetailsLayout>
//               </MovieCardLayout>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }

// export default FeedLayout;

export default function FeedLayout (movieList) {
  console.log(movieList)
  return (
          <div class="col-md-9">
            <div class="row">
              {movieList["movieList"].map((movie) => {
                return (
                  <MovieCardLayout>
                    <MovieDetailsLayout>{movie}</MovieDetailsLayout>
                  </MovieCardLayout>
                );
              })}
            </div>
          </div>
        );
}
