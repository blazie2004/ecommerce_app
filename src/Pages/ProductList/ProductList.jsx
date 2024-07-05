import './ProductList.css';

// Image import
import ProductImage from '../../assets/product.jpg'
import ProductBox from '../../Components/ProductBox/ProductBox';
import FilterProducts from '../../Components/FilterProducts/FilterProducts';
import GetallProducts from '../../hooks/GetallProducts';

function ProductList() {
    const {getallproducts}=GetallProducts();
    
    
   
    return (
        <div className='container'>
            <div className='row'>
                <h2 className='product-list-title text-center'>All Products</h2>
                <div className='product-list-wrapper d-flex flex-row'>

                    <FilterProducts />

                    {/* list of products */}
                    <div className='product-list-box' id='productList'>

                       
                        {getallproducts.map((eachproduct)=>{
                            return (
                                <ProductBox key={eachproduct.id}

                                productImage={eachproduct.image}
                                id={eachproduct.id}
                                name={eachproduct.title}
                                price={eachproduct.price}
                                />
                            )
                            

                        })}

                    </div>


                </div>
            </div>
        </div>
    )
}

export default ProductList;