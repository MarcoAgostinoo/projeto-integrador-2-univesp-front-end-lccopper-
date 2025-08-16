import React from "react";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./productstyles.module.css";

export default function Eletrodos() {
  return (
    <div className={styles.eletrodosContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className="row align-items-center min-vh-75">
            <div className="col-lg-6">
              <div className={styles.heroContent}>
                <span className={styles.heroBadge}>Produto Premium</span>
                <h1 className={styles.heroTitle}>
                  Eletrodos de Solda por Resistência
                </h1>
                <p className={styles.heroSubtitle}>
                  Soluções de alta performance para máxima produtividade e redução de custos operacionais
                </p>
                <div className={styles.heroFeatures}>
                  <div className={styles.featureItem}>
                    <i className="fas fa-shield-alt"></i>
                    <span>Alta Durabilidade</span>
                  </div>
                  <div className={styles.featureItem}>
                    <i className="fas fa-rocket"></i>
                    <span>Maxima Produtividade</span>
                  </div>
                  <div className={styles.featureItem}>
                    <i className="fas fa-dollar-sign"></i>
                    <span>Reducao de Custos</span>
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
                  src="/eletrodos/eletrodo02.png"
                  alt="Eletrodos de Solda por Resistência"
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
            <h2 className={styles.sectionTitle}>Por que escolher nossos eletrodos?</h2>
            <p className={styles.sectionSubtitle}>
              Tecnologia avançada e materiais de qualidade superior para resultados excepcionais
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="fas fa-clock"></i>
                </div>
                <h3>Maior Vida Útil</h3>
                <p>
                  Resistência excepcional a temperaturas extremas, reduzindo deformação e necessidade de dressagem frequente.
                </p>
                <ul className={styles.benefitList}>
                  <li>Redução de 60% no tempo de inatividade</li>
                  <li>Maior consistência na qualidade da solda</li>
                  <li>Menor frequência de substituições</li>
                </ul>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="fas fa-rocket"></i>
                </div>
                <h3>Maxima Produtividade</h3>
                <p>
                  Intervalos mais longos entre dressagens permitem maior eficiência na linha de produção.
                </p>
                <ul className={styles.benefitList}>
                  <li>Aumento de 40% na produtividade</li>
                  <li>Reducao de paradas nao programadas</li>
                  <li>Melhor controle de qualidade</li>
                </ul>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="fas fa-dollar-sign"></i>
                </div>
                <h3>Redução de Custos</h3>
                <p>
                  Economia significativa em manutenção e energia, com retorno sobre investimento comprovado.
                </p>
                <ul className={styles.benefitList}>
                  <li>Economia de ate 30% em custos operacionais</li>
                  <li>Reducao da corrente de solda necessaria</li>
                  <li>Menor consumo de energia</li>
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
                  Fabricados com precisão para aplicações de alta produção em solda por ponto, projeção e costura.
                </p>
                
                <div className={styles.specsGrid}>
                  <div className={styles.specItem}>
                    <h4>Material</h4>
                    <p>Ligas de alta resistência ao desgaste</p>
                  </div>
                  <div className={styles.specItem}>
                    <h4>Temperatura</h4>
                    <p>Resistente até 1200°C</p>
                  </div>
                  <div className={styles.specItem}>
                    <h4>Dureza</h4>
                    <p>HRC 45-55</p>
                  </div>
                  <div className={styles.specItem}>
                    <h4>Condutividade</h4>
                    <p>Alta condutividade térmica</p>
                  </div>
                  <div className={styles.specItem}>
                    <h4>Aplicações</h4>
                    <p>Solda por ponto, projeção e costura</p>
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
                  src="/eletrodos/eletrodo03.jpg"
                  alt="Especificações Técnicas dos Eletrodos"
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
              Nossos eletrodos são utilizados em diversos setores industriais
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-3 col-sm-6">
              <div className={styles.applicationCard}>
                <div className={styles.appIcon}>
                  <i className="fas fa-car"></i>
                </div>
                <h4>Automotivo</h4>
                <p>Soldagem de chapas e componentes estruturais</p>
              </div>
            </div>
            
            <div className="col-md-3 col-sm-6">
              <div className={styles.applicationCard}>
                <div className={styles.appIcon}>
                  <i className="fas fa-industry"></i>
                </div>
                <h4>Metalurgia</h4>
                <p>Processos de fabricação e montagem industrial</p>
              </div>
            </div>
            
            <div className="col-md-3 col-sm-6">
              <div className={styles.applicationCard}>
                <div className={styles.appIcon}>
                  <i className="fas fa-cogs"></i>
                </div>
                <h4>Máquinas</h4>
                <p>Construção de equipamentos e maquinários</p>
              </div>
            </div>
            
            <div className="col-md-3 col-sm-6">
              <div className={styles.applicationCard}>
                <div className={styles.appIcon}>
                  <i className="fas fa-tools"></i>
                </div>
                <h4>Manutenção</h4>
                <p>Reparos e manutenção industrial</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
                            <h2>Pronto para otimizar sua producao?</h2>
            <p>
              Nossa equipe tecnica esta pronta para ajudar voce a escolher a melhor solucao para suas necessidades especificas.
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
