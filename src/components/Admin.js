const Admin = ({ products, setProducts, getUI }) => {
  return (
    <div>
      <p>Add/delete/edit Companies/customers</p>
      <ui>{getUI()}</ui>
    </div>
  );
};
export default Admin;
