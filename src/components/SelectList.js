import {useState} from "react"
import chevronup from "../assets/chevron-up.svg"
import chevrondown from "../assets/chevron-down.svg"
import check from "../assets/check.svg"

export default function InputBox({labels,numPhotos,setPhoto,currentPhoto}) {
	// State for managing whether it is opened or closed
	let [openedOrClosed,setState] = useState(false)
	// State for managing which label is pressed or selected
	let [selectedOption,setOption] = useState(0)

	// header Label
	let headerLabel = labels[selectedOption]
	// If an item is selected callback to call
	let callback = function(evt) {
	  evt.preventDefault()

	  let selectedField = evt.currentTarget.textContent
	  // selected position
	  let index = labels.indexOf(selectedField)
	  // Update state with new selected
	  setOption(index)
	  setState(opened => !opened)

	  let totalLength  = Math.min(labels.length,numPhotos)

	  //result of mapping
	  let results = {}

	  for (let index=0; index < totalLength; ++index ) {
	  	results[labels[index]] = index
	  }

	  let current = results[selectedField]
	  if (current) setPhoto(current)
	  else setPhoto(0)

	}

	if (!openedOrClosed)
	  return (
        <section className="select-header">
            <span className="option"> {headerLabel} </span>

            <img src={chevronup} className="product-description-logo" alt="closed icon"  onClick = {e => {
      	  	  e.preventDefault(); setState(opened => !opened)}}/>

        </section>
	  )

	  else if(openedOrClosed)
	  	return (<section className="select">
	  	  <header className="select-header">
	  	  	<span className="option">{headerLabel}</span>
	  	  	<img src={chevrondown} className="product-description-logo" onClick = {e => {
      	  	  e.preventDefault(); setState(opened => !opened)

      	  	}} alt="opened list icon"/>
	  	  </header>

	  	  {
	  	  	labels.map((label) => {
	  	  	  if (label === headerLabel) 
	  	  	  	return (
	  	  	  		<section className="select-header" style={{borderWidth:0}}>
	  	  	  			<span className="option">{headerLabel}</span>
	  	  	  			<img src={check} alt="check"/>
	  	  	  		</section>
	  	  	     )

	  	      return (
	  	      	<span onClick={callback} className="option" key={label}>{label}</span>
	  	      )
	  	  	})
	  	  }

	  	</section>)

}