
const Product = (props) => {
  return (
    <article className="Product">
      <div>
        <h3>{props.data.product}</h3>
        <img src={props.data.image} alt=""/>
        {props.data.cost}&euro;
        <a href={props.data.shopLink} target="_blank">Comprar</a>
      </div>
    </article>
  )
}

export default Product
