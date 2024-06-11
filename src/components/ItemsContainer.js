import Item from "./Item"

export default function ItemsContainer({data}) {
	return (
		<section className="item-container">
			{ data.map(product => <Item {...product} />) }
		</section>

	)

}