import Section from "./components/product"
import ProductDescription from './components/discription';
import RelatedProducts from "./components/relatedproduct";


export default function SingleProduct() {
    return(
        <>
        <Section/>
        <ProductDescription/>
        <RelatedProducts/>
        </>
    )
}