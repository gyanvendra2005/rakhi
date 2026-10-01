import React from 'react';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import ProductDetail from '@/components/ProductDetail';
import Footer from '@/components/Footer';
import { products, getProductBySlug } from '@/data/products';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-red-500 selection:text-white">
      <Navbar />
      <ProductDetail product={product} />
      <Footer />
    </div>
  );
}
