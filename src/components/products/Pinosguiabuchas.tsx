import React from "react";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./productstyles.module.css";

export default function Pinosguiabuchas() {
  return (
    <div className={styles.eletrodosContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className="row align-items-center min-vh-75">
            <div className="col-lg-6">
              <div className={styles.heroContent}>
                <span className={styles.heroBadge}>Precisão Industrial</span>
                <h1 className={styles.heroTitle}>
                  Pinos Guia e Buchas
                </h1>
                <p className={styles.heroSubtitle}>
                  Precisao e durabilidade para sua soldagem com isolamento superior e resistencia excepcional
                </p>
                <div className={styles.heroFeatures}>
                  <div className={styles.featureItem}>
                    <i className="fas fa-shield-alt"></i>
                    <span>Isolamento Superior</span>
                  </div>
                  <div className={styles.featureItem}>
                    <i className="fas fa-gem"></i>
                    <span>Alta Durabilidade</span>
                  </div>
                  <div className={styles.featureItem}>
                    <i className="fas fa-ruler"></i>
                    <span>Precisao Milimetrica</span>
                  </div>
                </div>
                <div className={styles.heroButtons}>
                  <Link href="/contato" className={`btn ${styles.primaryBtn}`}>
                    Solicitar Orçamento
                  </Link>
                  <Link href="#especificacoes" className={`btn ${styles.secondaryBtn}`}>
                    Ver Especificações
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.heroImage}>
                <Image
                  src="/pinosguiabuchas/pino03.png"
                  alt="Pinos Guia e Buchas"
                  width={600}
                  height={500}
                  className={styles.mainImage}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className={styles.sectionTitle}>Por que escolher Pinos Guia e Buchas da LC Copper?</h2>
            <p className={styles.sectionSubtitle}>
              Tecnologia avançada para soldas limpas e precisas com máxima durabilidade
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3>Isolamento Superior</h3>
                <p>
                  O material possui uma camada isolante integrada, eliminando a passagem de corrente indesejada e garantindo soldas limpas e precisas.
                </p>
                <ul className={styles.benefitList}>
                  <li>Camada isolante integrada</li>
                  <li>Eliminação de corrente parasita</li>
                  <li>Soldas limpas e precisas</li>
                </ul>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="fas fa-gem"></i>
                </div>
                <h3>Resistência ao Desgaste</h3>
                <p>
                  A dureza garante uma vida útil prolongada, mesmo em aplicações de alta demanda, superando a fragilidade da cerâmica.
                </p>
                <ul className={styles.benefitList}>
                  <li>Vida útil prolongada</li>
                  <li>Alta resistência ao desgaste</li>
                  <li>Superior à cerâmica</li>
                </ul>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="fas fa-bullseye"></i>
                </div>
                <h3>Precisão Inigualável</h3>
                <p>
                  A estabilidade dimensional permite a fabricação de pinos e buchas com tolerâncias rígidas, garantindo o posicionamento perfeito.
                </p>
                <ul className={styles.benefitList}>
                  <li>Tolerâncias rígidas</li>
                  <li>Posicionamento perfeito</li>
                  <li>Estabilidade dimensional</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section id="especificacoes" className={styles.specsSection}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className={styles.specsContent}>
                <h2 className={styles.sectionTitle}>Especificações Técnicas</h2>
                <p className={styles.sectionSubtitle}>
                  Pinos e buchas projetados para máxima precisão e durabilidade em soldagem por resistência.
                </p>
                
                <div className={styles.specsGrid}>
                  <div className={styles.specItem}>
                    <h4>Tamanhos</h4>
                    <p>M4, M5, M6, M8, M10, M12</p>
                  </div>
                  <div className={styles.specItem}>
                    <h4>Isolamento</h4>
                    <p>Camada integrada</p>
                  </div>
                  <div className={styles.specItem}>
                    <h4>Durabilidade</h4>
                    <p>Superior à cerâmica</p>
                  </div>
                  <div className={styles.specItem}>
                    <h4>Precisão</h4>
                    <p>Tolerâncias rígidas</p>
                  </div>
                  <div className={styles.specItem}>
                    <h4>Fabricacao</h4>
                    <p>Sob medida disponível</p>
                  </div>
                  <div className={styles.specItem}>
                    <h4>Certificação</h4>
                    <p>ISO 9001:2015</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className={styles.specsImage}>
                <Image
                  src="/pinosguiabuchas/pino02.webp"
                  alt="Especificações Técnicas dos Pinos"
                  width={500}
                  height={400}
                  className={styles.specImage}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className={styles.applicationsSection}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className={styles.sectionTitle}>Aplicações Industriais</h2>
            <p className={styles.sectionSubtitle}>
              Nossos pinos e buchas são utilizados em diversos setores industriais
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-3 col-sm-6">
              <div className={styles.applicationCard}>
                <div className={styles.appIcon}>
                  <i className="fas fa-car"></i>
                </div>
                <h4>Automotivo</h4>
                <p>Soldagem por projeção</p>
              </div>
            </div>
            
            <div className="col-md-3 col-sm-6">
              <div className={styles.applicationCard}>
                                  <div className={styles.appIcon}>
                    <i className="fas fa-cog"></i>
                  </div>
                <h4>Porcas e Parafusos</h4>
                <p>Soldagem de fixadores</p>
              </div>
            </div>
            
            <div className="col-md-3 col-sm-6">
              <div className={styles.applicationCard}>
                                  <div className={styles.appIcon}>
                    <i className="fas fa-map-pin"></i>
                  </div>
                <h4>Soldagem de Pinos</h4>
                <p>Aplicações específicas</p>
              </div>
            </div>
            
            <div className="col-md-3 col-sm-6">
              <div className={styles.applicationCard}>
                <div className={styles.appIcon}>
                  <i className="fas fa-industry"></i>
                </div>
                <h4>Indústria Geral</h4>
                <p>Diversas aplicações</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Pronto para otimizar sua soldagem?</h2>
            <p>
              Aumente sua produtividade com menos interrupções e obtenha qualidade superior nas soldas com nossos pinos guia e buchas de alta performance.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contato" className={`btn ${styles.primaryBtn}`}>
                Solicitar Orçamento
              </Link>
              <Link href="/produtos" className={`btn ${styles.secondaryBtn}`}>
                Ver Outros Produtos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
