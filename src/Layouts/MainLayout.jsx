import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="md:container md:mx-auto mx-6">
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
