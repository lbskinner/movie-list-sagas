import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function DetailsPage({ dispatch, history, store }) {
  let { id } = useParams();
  console.log("paramsID: ", id);
  useEffect(() => {
    dispatch({ type: "GET_DETAILS", payload: id });
  }, [dispatch, id]);

  const backButtonClicked = (event) => {
    history.push("/");
    dispatch({ type: "CLEAR_DETAILS" });
  };

  const editButtonClicked = (event) => {
    history.push("/edit");
  };
  return (
    <div>
      {store.movieDetails.length > 0 && (
        <div>
          <button onClick={backButtonClicked}>Back to List</button>
          <button onClick={editButtonClicked}>Edit</button>
          <img
            src={store.movieDetails[0].poster}
            alt={store.movieDetails[0].title}
          />
          <div>
            <h2>{store.movieDetails[0].title}</h2>
            <p>{store.movieDetails[0].description}</p>
            <ul>
              {store.movieDetails[0].genres.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

// class DetailsPage extends React.Component {
//   componentDidMount() {
//     let { id } = useParams();
//     console.log("paramsID: ", id);

//     this.props.dispatch({ type: "GET_DETAILS", payload: id });
//   }

//   backButtonClicked = (event) => {
//     this.props.history.push("/");
//   };

//   editButtonClicked = (event) => {
//     this.props.history.push("/edit");
//   };
//   render() {
//     console.log(this.props.store);
//     let { id } = useParams();
//     console.log("paramsID: ", id);
//     return (
//       <div>
//         {/* {this.props.store.movieDetails.length > 0 && ( */}
//         {/* <div>
//           <button onClick={this.backButtonClicked}>Back to List</button>
//           <button onClick={this.editButtonClicked}>Edit</button>
//           <img
//             src={this.props.store.movieDetails[0].poster}
//             alt={this.props.store.movieDetails[0].title}
//           />
//           <div>
//             <h2>{this.props.store.movieDetails[0].title}</h2>
//             <p>{this.props.store.movieDetails[0].description}</p>
//             <ul>
//               {this.props.store.movieDetails[0].genres.map((genre, index) => (
//                 <li key={index}>{genre}</li>
//               ))}
//             </ul>
//           </div>
//         </div> */}
//         {/* )} */}
//       </div>
//     );
//   }
// }

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(DetailsPage);
