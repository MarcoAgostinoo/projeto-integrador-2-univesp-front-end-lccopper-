import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./prodbanner.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ProdBanner() {
  return (
    <div className={`container ${styles.catalogContainer}`}>
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className={styles.catalogTitle}>Catálogo de Produtos</h1>
        <p className="text-muted fs-5 mb-0">
          Soluções completas em equipamentos para soldagem industrial
        </p>
        <div className="d-flex justify-content-center mt-3">
          <div className="bg-primary" style={{ width: '60px', height: '3px' }}></div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="row g-4">
        {products.map((product, index) => (
          <div key={index} className="col-12 col-sm-6 col-lg-4">
            <div className={`card ${styles.productCard} h-100 position-relative overflow-hidden`}>
              {/* Product Image Container */}
              <div className="position-relative overflow-hidden" style={{ height: '250px' }}>
                <Link href={product.link} className="d-block h-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={`${styles.productImage} object-fit-cover`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Overlay on hover */}
                  <div className={`${styles.overlay}`}>
                    <span className={styles.overlayText}>Ver Detalhes</span>
                  </div>
                </Link>
              </div>

              {/* Product Info */}
              <div className="card-body d-flex flex-column p-4">
                <h5 className="card-title fw-bold text-primary mb-3">{product.name}</h5>
                <p className="card-text text-muted flex-grow-1 mb-3">{product.description}</p>
                
                {/* Action Button */}
                <Link 
                  href={product.link}
                  className="btn btn-outline-primary w-100 fw-semibold text-decoration-none"
                  style={{ 
                    borderRadius: '25px',
                    padding: '12px 24px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Saiba Mais
                  <i className="fas fa-arrow-right ms-2"></i>
                </Link>
              </div>

                              {/* Category Badge */}
                <div className="position-absolute top-0 end-0 m-3">
                  <span className={`badge ${styles.categoryBadge} px-3 py-2 rounded-pill`}>
                    {product.category}
                  </span>
                </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="text-center mt-5 pt-5">
        <div className={styles.ctaSection}>
          <h3 className={styles.ctaTitle}>Precisa de uma solução personalizada?</h3>
          <p className="text-muted mb-4">
            Nossa equipe técnica está pronta para ajudar você a encontrar a melhor solução para suas necessidades.
          </p>
          <Link 
            href="/contato" 
            className={`btn btn-lg px-5 py-3 fw-bold ${styles.ctaButton}`}
          >
            Entre em Contato
          </Link>
        </div>
      </div>
    </div>
  );
}

const products = [
  {
    name: "Eletrodos",
    description: "Eletrodos de alta qualidade para soldagem eficiente com durabilidade excepcional e performance superior.",
    image: "/eletrodos/eletrodo02.png",
    link: "eletrodos",
    category: "Soldagem"
  },
  {
    name: "Braços e Pinças",
    description: "Braços e pinças desenvolvidos para otimizar processos de soldagem com precisão e confiabilidade.",
    image: "/bracosepincas/braco01.jpg",
    link: "bracos",
    category: "Acessórios"
  },
  {
    name: "Discos",
    description: "Discos de soldagem para diferentes aplicações industriais com acabamento superior e longa vida útil.",
    image: "/discos/disco1.png",
    link: "discos",
    category: "Soldagem"
  },
  {
    name: "Pinos Guia e Buchas",
    description: "Pinos guia e buchas para soldagem precisa e segura com tolerâncias rigorosas e alta qualidade.",
    image: "/pinosguiabuchas/pino01.webp",
    link: "pinos",
    category: "Precisão"
  },
  {
    name: "Porta Eletrodos",
    description: "Porta eletrodos com refrigeração externa para melhor performance e controle térmico avançado.",
    image: "/portaeletrodos/portaeletrodo02.png",
    link: "portaeletrodos",
    category: "Sistema"
  },
  {
    name: "Shunts",
    description: "Shunts de precisão para garantir a eficiência da soldagem com medição precisa de corrente.",
    image: "/shunts/shunts01.png",
    link: "shunts",
    category: "Medição"
  },
];
