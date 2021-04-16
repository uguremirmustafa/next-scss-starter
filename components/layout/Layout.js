import React from 'react';
import Navbar from '@components/layout/Navbar';
import Footer from '@components/layout/Footer';

export default function Layout({ children }) {
  return (
    <div className="grid">
      <Navbar />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}
