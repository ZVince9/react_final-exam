import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <Suspense fallback={<></>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default Main;
