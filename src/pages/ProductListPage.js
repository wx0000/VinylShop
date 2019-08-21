import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductListPage.css";
import prodcov1 from "../images/prodcov1.jpg";
import prodcov2 from "../images/prodcov2.jpg";
import prodcov3 from "../images/prodcov3.jpg";
import prodcov4 from "../images/prodcov4.jpg";
import prodcov5 from "../images/prodcov5.jpg";


class ProductListPage extends React.Component {

state = [
  {
    id: 1,
    title: "Significant Changes",
    author: "Jayda G",
    releaseDate: "February 7, 2019",
    prodCover: prodcov1,
    text: ""
  },
  {
    id: 2,
    title: "LesAlpx",
    author: "Floating Points",
    releaseDate: "February 7, 2019",
    prodCover: prodcov2,
    text: ""
  },
  {
    id: 3,
    title: "Japan (feat. Saint Sinner)",
    author: "Tycho",
    releaseDate: "February 7, 2019",
    prodCover: prodcov3,
    text: ""
  },
  {
    id: 4,
    title: "Weather",
    author: "Tycho",
    releaseDate: "February 7, 2019",
    prodCover: prodcov4,
    text: ""
  },
  {
    id: 5,
    title: "Final Form",
    author: "Sampa The Great",
    releaseDate: "February 7, 2019",
    prodCover: prodcov5,
    text: ""
  }
];

render(){
  const prodList = this.state.map(product => (
    <li key={product.id} author={product.author}>
      <Link to={`/product/${product.title}`} author={product.author}>
        {product.author} - {product.title}
      </Link>
    </li>
  ));

  return (
    <div className="products">
      <h2>Lista produktów</h2>
      <div>
        <ul>{prodList}</ul>
      </div>
    </div>
  );
}};
export default ProductListPage;
