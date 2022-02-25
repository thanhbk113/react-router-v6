import { Link ,Outlet} from "react-router-dom";

const Products = () => {
    return (
        <>
            <div>
            <input type='text' placeholder='Search product' /> 
            </div>
            <nav>
              <Link to='featured'>Featured</Link>
              <Link to='new'>New</Link>
            </nav>
            <Outlet />
        </>
    );
};

export default Products;