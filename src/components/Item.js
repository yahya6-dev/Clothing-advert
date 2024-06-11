import {useState} from "react"
import ProductProperty from "./ProductProperty"
import sizeIcon from "../assets/size-gray.svg"
import colorPalette from "../assets/palette-gray.svg"
import love from "../assets/heart-red.svg"

export default function Item({photos,name,price,type,sizes=[],colors=[]}) {
  // A state managing list of photos per product
  let [currentPhoto,setPhoto] = useState(0)
  // Our selected image to be displayed
  let photo = photos[currentPhoto]

  return (
  	<section className="product">
  	  <div className="product-header">
        <img src={love} alt="like" className="love-overflow"/>
      	<img src={photo} alt="product" className="product-image"/>
      	<span className="save-overflow">-10%</span>
      </div>
      <article className="product-name">{name}</article>
      <article className="product-price">₦{price}</article>

      <ProductProperty label="Size" logo={sizeIcon} fields={sizes}  numPhotos={photos.length} setPhoto={setPhoto}
      	currentPhoto={currentPhoto}/> 
     

      
      <ProductProperty label="Colors" logo={colorPalette} fields={colors} numPhotos={photos.length} setPhoto={setPhoto}
      	currentPhoto={currentPhoto}/> 
  	</section>
   ) 

}