import { Outlet } from "react-router-dom";

const HeaderLayout = () => {
  return (
    <>
      <div>
        <h2>Hej</h2>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default HeaderLayout;
