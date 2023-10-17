import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import Header from "../Header/Header";

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};
