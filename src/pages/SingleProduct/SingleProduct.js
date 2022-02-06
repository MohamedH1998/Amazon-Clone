import React from "react"
import { useParams } from "react-router-dom"
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined"
import { useDispatch } from "react-redux"
import { products } from "../../utils/ProductsData"
import { addToBasket } from "../../redux/actions"
import "./SingleProduct.css"

const SingleProduct = () => {
  let { id } = useParams()
  let dispatch = useDispatch()
  let singleProduct = products.find(item => item.id === id)

  const addItemToBasket = () => {
    const item = {
      id: singleProduct.id,
      rating: singleProduct.rating,
      title: singleProduct.title,
      price: singleProduct.price,
      image: singleProduct.image,
      specification: singleProduct.specification,
      detail: singleProduct.detail
    }
    dispatch(addToBasket(item))
  }
  return (
    <div className="single-product-container">
      <img
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        className="singple-product-ad"
        alt=""
      />
      <div className="single-product">
        <img
          src={singleProduct.image}
          alt="product"
          className="single-product-image"
        />
        <div className="single-product-info">
          <div className="single-product-title">{singleProduct.title}</div>
          <div className="single-product-rating">
            {Array(singleProduct.rating)
              .fill()
              .map((_, index) => (
                <p key={index}>⭐</p>
              ))}
          </div>
          <p className="single-product-price">
            Price: <strong>£</strong>
            <strong>{singleProduct.price}</strong>
          </p>
          <div className="single-product-specification">
            <h4>Specification</h4>
            {singleProduct.specification &&
              singleProduct.specification.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
          </div>
          <div className="single-product-description">
            <h4>Product Description</h4>
            <p>{singleProduct.detail}</p>
          </div>
          <button onClick={addItemToBasket}>
            <i>
              <ShoppingCartOutlinedIcon />
            </i>
            Add To Basket
          </button>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
