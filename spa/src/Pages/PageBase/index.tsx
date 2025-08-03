import Header from "../../_components/Header/Header";
import { Outlet } from "react-router-dom";

export default function PageBase() {

  return (
    <main>
      <div className="fixed-top">
        <Header />
      </div>
      <div>
        <Outlet />
      </div>

    </main>
  );
}