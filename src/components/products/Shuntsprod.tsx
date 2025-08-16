import React from "react";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./productstyles.module.css";

export default function Shuntsprod() {
  return (
    <div className={styles.eletrodosContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className="row align-items-center min-vh-75">
            <div className="col-lg-6">
              <div className={styles.heroContent}>
                <span className={styles.heroBadge}>Conexões Elétricas</span>
                <h1 className={styles.heroTitle}>
                  Shunts de Alta Performance
                </h1>
                <p className={styles.heroSubtitle}>
                  Conexões flexíveis e eficientes para máxima condutividade elétrica e distribuição de energia
                </p>
                <div className={styles.heroFeatures}>
                  <div className={styles.featureItem}>
                    <i className="fas fa-bolt"></i>
                    <span>Alta Condutividade</span>
                  </div>
                  <div className={styles.featureItem}>
                    <i className="fas fa-cogs"></i>
                    <span>Sob Medida</span>
                  </div>
                  <div className={styles.featureItem}>
                    <i className="fas fa-shield-alt"></i>
                    <span>Durabilidade</span>
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
                  src="/shunts/shunts01.png"
                  alt="Shunts de Alta Performance"
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
            <h2 className={styles.sectionTitle}>Por que escolher os Shunts da LC Copper?</h2>
            <p className={styles.sectionSubtitle}>
              Fabricação personalizada com materiais de primeira linha para máxima eficiência
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="fas fa-cogs"></i>
                </div>
                <h3>Fabricação Personalizada</h3>
                <p>
                  Desenvolvemos shunts, barramentos flexíveis e fixos de acordo com as suas especificações, garantindo a compatibilidade perfeita.
                </p>
                <ul className={styles.benefitList}>
                  <li>Desenvolvimento sob medida</li>
                  <li>Compatibilidade perfeita</li>
                  <li>Especificações personalizadas</li>
                </ul>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="fas fa-gem"></i>
                </div>
                <h3>Materiais de Primeira Linha</h3>
                <p>
                  Utilizamos Cobre Eletrolítico (CUEL) de alta condutividade, minimizando as perdas de energia e maximizando a eficiência.
                </p>
                <ul className={styles.benefitList}>
                  <li>Cobre Eletrolítico (CUEL)</li>
                  <li>Mínima perda de energia</li>
                  <li>Máxima eficiência</li>
                </ul>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="fas fa-cog"></i>
                </div>
                <h3>Tecnologia Avançada</h3>
                <p>
                  Aplicamos técnicas de fabricação de ponta, como soldagem por difusão de polímero, para garantir a durabilidade e qualidade.
                </p>
                <ul className={styles.benefitList}>
                  <li>Soldagem por difusão</li>
                  <li>Durabilidade garantida</li>
                  <li>Qualidade superior</li>
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
                  Shunts projetados para máxima eficiência em distribuição de energia elétrica.
                </p>
                
                <div className={styles.specsGrid}>
                  <div className={styles.specItem}>
                    <h4>Material</h4>
                    <p>Cobre Eletrolítico (CUEL)</p>
                  </div>
                  <div className={styles.specItem}>
                    <h4>Condutividade</h4>
                    <p>Alta condutividade elétrica</p>
                  </div>
                  <div className={styles.specItem}>
                    <h4>Flexibilidade</h4>
                    <p>Absorve vibrações</p>
                  </div>
                  <div className={styles.specItem}>
                    <h4>Resistência</h4>
                    <p>Mecânica excepcional</p>
                  </div>
                  <div className={styles.specItem}>
                    <h4>Fabricacao</h4>
                    <p>Soldagem por difusão</p>
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
                  src="/shunts/shunts02.png"
                  alt="Especificações Técnicas dos Shunts"
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
              Nossos shunts são utilizados em diversos setores industriais
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-3 col-sm-6">
              <div className={styles.applicationCard}>
                <div className={styles.appIcon}>
                  <i className="fas fa-bolt"></i>
                </div>
                <h4>Soldagem por Resistência</h4>
                <p>Conexões flexíveis para máquinas</p>
              </div>
            </div>
            
            <div className="col-md-3 col-sm-6">
              <div className={styles.applicationCard}>
                <div className={styles.appIcon}>
                  <i className="fas fa-industry"></i>
                </div>
                <h4>Usinas de Energia</h4>
                <p>Distribuição com mínima perda</p>
              </div>
            </div>
            
            <div className="col-md-3 col-sm-6">
              <div className={styles.applicationCard}>
                <div className={styles.appIcon}>
                  <i className="fas fa-cog"></i>
                </div>
                <h4>Transformadores</h4>
                <p>Equipamentos de alta potência</p>
              </div>
            </div>
            
            <div className="col-md-3 col-sm-6">
              <div className={styles.applicationCard}>
                                  <div className={styles.appIcon}>
                    <i className="fas fa-power-off"></i>
                  </div>
                <h4>Comutadores</h4>
                <p>Operação segura e estável</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Pronto para otimizar suas conexões?</h2>
            <p>
              Entre em contato conosco hoje mesmo para discutir suas necessidades e obter um orçamento personalizado. A LC Copper tem a solução ideal para suas conexões elétricas!
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
