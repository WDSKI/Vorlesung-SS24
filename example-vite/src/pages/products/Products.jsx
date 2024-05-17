import { Outlet } from 'react-router-dom';

const Products = () => {
  return (
    <>
      <Outlet />
      <h1>Product Overview</h1>
    </>
  );
};
export default Products;
