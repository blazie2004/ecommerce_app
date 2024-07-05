import { useParams } from 'react-router';
import './ProductDetails.css';
import GetProductById from '../../hooks/GetProductById';

function ProductDetails() {
    // Get product by id
    const { id } = useParams();
    const product = GetProductById({ id });

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <div className="row">
                <div className="product-details-wrapper d-flex justify-content-between align-items-start flex-row">
                    <div className="product-img d-flex">
                        <img 
                            src={product.image}
                            alt="product image" 
                            id="product-img" 
                        />
                    </div>

                    <div className="product-details-box d-flex flex-column">
                        <div id="productDetails">
                            {/* <!-- product details --> */}
                            <div className="product-name" id="product-name">{product.title}</div>
                            <div className="product-price fw-bold" id="product-price">{product.price}</div>
                            <div className="product-description">
                                <div className="product-description-title fw-bold">Description</div>
                                <div className="product-description-data" id="product-description-data">
                                    {product.description}
                                </div>
                            </div>
                        </div>

                        <div className="product-details-action btn btn-primary text-decoration-none">Add to cart</div>
                        <a href="cart.html" id="goToCartBtn" className="product-details-action btn btn-warning text-decoration-none">
                            Go to cart
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
