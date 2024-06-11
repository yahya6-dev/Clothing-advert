import SelectList from "./SelectList"

export default function ProductProperty({label,logo,fields,numPhotos,setPhoto,currentPhoto}) {
	return (
	  <section className="product-description">
        <span className="product-label">{label}</span>
        <img className="product-description-logo" style={{width:"2rem"}}src={logo} alt="product property "/>
        <SelectList labels={fields} numPhotos={numPhotos} setPhoto={setPhoto} currentPhoto={currentPhoto}/>
	  </section>

	)
}