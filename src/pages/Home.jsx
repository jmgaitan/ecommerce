import { products } from '../temp/products.json'
import { Products } from '../components/Products.jsx'

console.log("estas en el home.jsx")
const home = () => {
  return (
    <div>
        <Products products={products} />
    </div>
  )
}

export default home