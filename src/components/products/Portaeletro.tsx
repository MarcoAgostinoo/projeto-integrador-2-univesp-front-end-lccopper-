import React from "react";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./productstyles.module.css";

export default function Portaeletrodo() {
  return (
    <div className={styles.eletrodosContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className="row align-items-center min-vh-75">
            <div className="col-lg-6">
              <div className={styles.heroContent}>
                <span className={styles.heroBadge}>Sistema de Soldagem</span>
                <h1 className={styles.heroTitle}>
                  Porta Eletrodos
                </h1>
                <p className={styles.heroSubtitle}>
                  Desempenho e durabilidade para sua soldagem com refrigeração externa e controle térmico avançado
                </p>
                <div className={styles.heroFeatures}>
                  <div className={styles.featureItem}>
                    <i className="fas fa-snowflake"></i>
                    <span>Refrigeração Externa</span>
                  </div>
                  <div className={styles.featureItem}>
                    <i className="fas fa-shield-alt"></i>
                    <span>Alta Resistência</span>
                  </div>
                  <div className={styles.featureItem}>
                    <i className="fas fa-link"></i>
                    <span>Compatibilidade Total</span>
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
                  src="/portaeletrodos/portaeletrodo03.png"
                  alt="Porta Eletrodos"
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
            <h2 className={styles.sectionTitle}>Por que escolher os Porta Eletrodos LC Copper?</h2>
            <p className={styles.sectionSubtitle}>
              Otimize sua produção com porta eletrodos de extrema qualidade e performance superior
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="fas fa-gem"></i>
                </div>
                <h3>Ligas de Alta Qualidade</h3>
                <p>
                  Fabricados com ligas de cobre de alta qualidade como CUCR, CUCRZR e CUCOBE, garantindo excelente condutividade elétrica e térmica.
                </p>
                <ul className={styles.benefitList}>
                  <li>Excelente condutividade elétrica</li>
                  <li>Condutividade térmica superior</li>
                  <li>Soldas consistentes</li>
                </ul>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3>Alta Resistência ao Desgaste</h3>
                <p>
                  Prolongando a vida útil do porta eletrodo, mesmo sob uso intensivo, com design robusto para suportar demandas industriais.
                </p>
                <ul className={styles.benefitList}>
                  <li>Vida útil prolongada</li>
                  <li>Design robusto</li>
                  <li>Suporte a demandas industriais</li>
                </ul>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="fas fa-cogs"></i>
                </div>
                <h3>Compatibilidade Total</h3>
                <p>
                  Disponíveis em modelos para atender às necessidades de solda ponto e projeção, com opções para porcas M6, M8, M10 e M12.
                </p>
                <ul className={styles.benefitList}>
                  <li>Solda ponto e projeção</li>
                  <li>Múltiplos tamanhos de porcas</li>
                  <li>Versatilidade de aplicação</li>
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
                  Porta eletrodos projetados para máxima eficiência e durabilidade em soldagem industrial.
                </p>
                
                <div className={styles.specsGrid}>
                  <div className={styles.specItem}>
                    <h4>Ligas</h4>
                    <p>CUCR, CUCRZR, CUCOBE</p>
                  </div>
                  <div className={styles.specItem}>
                    <h4>Condutividade</h4>
                    <p>Elétrica e térmica superior</p>
                  </div>
                  <div className={styles.specItem}>
                    <h4>Resistência</h4>
                    <p>Ao desgaste excepcional</p>
                  </div>
                  <div className={styles.specItem}>
                    <h4>Porcas</h4>
                    <p>M6, M8, M10, M12</p>
                  </div>
                  <div className={styles.specItem}>
                    <h4>Aplicações</h4>
                    <p>Ponto e projeção</p>
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
                  src="/portaeletrodos/portaeletrodo02.png"
                  alt="Especificações Técnicas dos Porta Eletrodos"
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
              Nossos porta eletrodos são utilizados em diversos setores industriais
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-3 col-sm-6">
              <div className={styles.applicationCard}>
                <div className={styles.appIcon}>
                  <i className="fas fa-car"></i>
                </div>
                <h4>Automotivo</h4>
                <p>Soldagem de componentes</p>
              </div>
            </div>
            
                          <div className="col-md-3 col-sm-6">
                <div className={styles.applicationCard}>
                  <div className={styles.appIcon}>
                    <i className="fas fa-industry"></i>
                  </div>
                  <h4>Siderúrgica</h4>
                  <p>Processos industriais</p>
                </div>
              </div>
            
            <div className="col-md-3 col-sm-6">
              <div className={styles.applicationCard}>
                <div className={styles.appIcon}>
                  <i className="fas fa-cogs"></i>
                </div>
                <h4>Maquinários</h4>
                <p>Equipamentos industriais</p>
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
            <h2>Pronto para elevar sua produção?</h2>
            <p>
              Entre em contato conosco e descubra como os Porta Eletrodos LC Copper podem elevar a qualidade e eficiência da sua produção!
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
