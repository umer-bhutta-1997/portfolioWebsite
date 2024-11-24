import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer className="bg-gray-800 text-gray-300 text-center py-4">
        © {new Date().getFullYear()} Candle.io. All rights reserved.
      </footer>
    </>
  );
};

export default Layout;
