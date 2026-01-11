import { Outlet } from 'react-router-dom';
import { Footer } from './footer';
import { NavBar } from './navBar';

export default function AuthLayout() {

  return (
    <div className="min-vh-100 d-flex flex-column">
      <NavBar />

      <main className="flex-fill">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
