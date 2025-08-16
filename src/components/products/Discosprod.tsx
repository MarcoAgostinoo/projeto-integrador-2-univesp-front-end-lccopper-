import React from "react";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./productstyles.module.css";

export default function Discosprod() {
  return (
    <div className={styles.eletrodosContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className="row align-items-center min-vh-75">
            <div className="col-lg-6">
              <div className={styles.heroContent}>
                <span className={styles.heroBadge}>Soldagem por Costura</span>
                <h1 className={styles.heroTitle}>
                  Discos para Soldagem por Costura
                </h1>
                <p className={styles.heroSubtitle}>
                  Eficiencia e qualidade em suas maos com discos de alta performance para soldagem por costura
                </p>
                <div className={styles.heroFeatures}>
                  <div className={styles.featureItem}>
                    <i className="fas fa-circle"></i>
                    <span>Sob Medida</span>
                  </div>
                  <div className={styles.featureItem}>
                    <i className="fas fa-trophy"></i>
                    <span>Alta Qualidade</span>
                  </div>
                  <div className={styles.featureItem}>
                    <i className="fas fa-bolt"></i>
                    <span>Alta Performance</span>
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
                  src="/discos/disco1.jpg"
                  alt="Discos para Soldagem por Costura"
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
            <h2 className={styles.sectionTitle}>Por que escolher os discos LC Copper?</h2>
            <p className={styles.sectionSubtitle}>
                             Materiais de excelencia e precisao garantida para suas operacoes de soldagem
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="fas fa-gem"></i>
                </div>
                <h3>Materiais de Alta Performance</h3>
                <p>
                  Trabalhamos com ligas de cobre de excelencia, como CUCR, CUCRZR e CUCOBE, que garantem condutividade eletrica superior.
                </p>
                <ul className={styles.benefitList}>
                  <li>Condutividade eletrica superior</li>
                  <li>Resistência ao desgaste</li>
                  <li>Durabilidade excepcional</li>
                </ul>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="fas fa-bullseye"></i>
                </div>
                <h3>Precisao e Confiabilidade</h3>
                <p>
                  Nossos discos sao fabricados com rigoroso controle de qualidade, assegurando dimensoes precisas e desempenho consistente.
                </p>
                <ul className={styles.benefitList}>
                  <li>Dimensoes precisas</li>
                  <li>Desempenho consistente</li>
                  <li>Controle rigoroso de qualidade</li>
                </ul>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="fas fa-cogs"></i>
                </div>
                <h3>Versatilidade e Personalizacao</h3>
                <p>
                  Atendemos a uma ampla gama de aplicacoes e desenvolvemos discos sob medida para suas necessidades especificas.
                </p>
                <ul className={styles.benefitList}>
                  <li>Ampla gama de aplicacoes</li>
                  <li>Desenvolvimento sob medida</li>
                  <li>Personalizacao completa</li>
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
                <h2 className={styles.sectionTitle}>Especificacoes Tecnicas</h2>
                <p className={styles.sectionSubtitle}>
                                     Discos projetados para maxima eficiencia em soldagem por costura.
                </p>
                
                <div className={styles.specsGrid}>
                  <div className={styles.specItem}>
                    <h4>Ligas</h4>
                    <p>CUCR, CUCRZR, CUCOBE</p>
                  </div>
                  <div className={styles.specItem}>
                    <h4>Condutividade</h4>
                    <p>Elétrica superior</p>
                  </div>
                  <div className={styles.specItem}>
                    <h4>Resistência</h4>
                    <p>Ao desgaste excepcional</p>
                  </div>
                  <div className={styles.specItem}>
                    <h4>Fabricacao</h4>
                    <p>Sob medida ou desenhos</p>
                  </div>
                  <div className={styles.specItem}>
                    <h4>Aplicações</h4>
                    <p>Chapas metálicas e motores</p>
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
                  src="/discos/disco2.jpg"
                  alt="Especificações Técnicas dos Discos"
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
              Nossos discos são utilizados em diversos setores industriais
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-3 col-sm-6">
              <div className={styles.applicationCard}>
                <div className={styles.appIcon}>
                  <i className="fas fa-car"></i>
                </div>
                <h4>Automotivo</h4>
                <p>Soldagem de chapas metálicas</p>
              </div>
            </div>
            
            <div className="col-md-3 col-sm-6">
              <div className={styles.applicationCard}>
                <div className={styles.appIcon}>
                  <i className="fas fa-cog"></i>
                </div>
                <h4>Motores Elétricos</h4>
                <p>Produção de componentes</p>
              </div>
            </div>
            
            <div className="col-md-3 col-sm-6">
              <div className={styles.applicationCard}>
                <div className={styles.appIcon}>
                  <i className="fas fa-industry"></i>
                </div>
                <h4>Metalurgia</h4>
                <p>Processos industriais</p>
              </div>
            </div>
            
            <div className="col-md-3 col-sm-6">
              <div className={styles.applicationCard}>
                <div className={styles.appIcon}>
                  <i className="fas fa-tools"></i>
                </div>
                <h4>Manutenção</h4>
                <p>Reparos e manutenção</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Pronto para elevar sua soldagem?</h2>
            <p>
              Entre em contato conosco hoje mesmo e descubra como os discos para soldagem por costura LC Copper podem elevar a qualidade e a eficiencia do seu processo de soldagem!
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
