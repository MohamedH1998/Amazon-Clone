import React from "react"
import { Link } from "react-router-dom"
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined"
import { useDispatch } from "react-redux"
import "./Product.css"
import { addToBasket } from "../../redux/actions"

const Product = ({
  id,
  title,
  image,
  price,
  rating,
  specification,
  detail
}) => {
  const dispatch = useDispatch()

  const addItemToBasket = () => {
    const item = {
      id,
      title,
      image,
      price,
      rating,
      specification,
      detail
    }
    dispatch(addToBasket(item))
  }
  return (
    <div className="product">
      <div className="info">
        <Link to={`/products/${id}`}>
          <p className="product-title">{title}</p>
        </Link>
        <p className="price">
          <strong>£</strong>
          <strong>{price}</strong>
        </p>
        <div className="rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addItemToBasket}>
        <i>
          <ShoppingCartOutlinedIcon />
        </i>
        Add to basket
      </button>
    </div>
  )
}

export default Product
