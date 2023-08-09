import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </main>
  );
}

export default MainLayout;
