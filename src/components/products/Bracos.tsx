import React from "react";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./productstyles.module.css";

export default function Bracos() {
  return (
    <div className={styles.eletrodosContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className="row align-items-center min-vh-75">
            <div className="col-lg-6">
              <div className={styles.heroContent}>
                <span className={styles.heroBadge}>Automação Industrial</span>
                <h1 className={styles.heroTitle}>
                  Braços para Robô e Pinças de Solda
                </h1>
                <p className={styles.heroSubtitle}>
                  Precisao milimetrica e durabilidade incomparavel para automacao industrial de alta performance
                </p>
                <div className={styles.heroFeatures}>
                  <div className={styles.featureItem}>
                    <i className="fas fa-cogs"></i>
                    <span>Fabricação Completa</span>
                  </div>
                  <div className={styles.featureItem}>
                    <i className="fas fa-star"></i>
                    <span>Alta Performance</span>
                  </div>
                  <div className={styles.featureItem}>
                    <i className="fas fa-wrench"></i>
                    <span>Customizável</span>
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
                  src="/bracosepincas/braco01.jpg"
                  alt="Braços para Robô e Pinças de Solda"
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
                            <h2 className={styles.sectionTitle}>Por que escolher nossos bracos para robo?</h2>
            <p className={styles.sectionSubtitle}>
                             Tecnologia de ponta e qualidade superior para maxima eficiencia industrial
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="fas fa-industry"></i>
                </div>
                <h3>Fabricacao Completa</h3>
                <p>
                  Desde a fundicao e usinagem dos bracos ate a montagem das pincas, garantimos o controle total do processo produtivo.
                </p>
                <ul className={styles.benefitList}>
                  <li>Controle total do processo</li>
                  <li>Qualidade garantida em cada etapa</li>
                  <li>Rastreabilidade completa</li>
                </ul>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="fas fa-gem"></i>
                </div>
                <h3>Materiais de Alta Performance</h3>
                <p>
                  Utilizamos ligas especiais selecionadas para oferecer a maxima resistencia e durabilidade.
                </p>
                <ul className={styles.benefitList}>
                  <li>Ligas especiais selecionadas</li>
                  <li>Maxima resistencia mecanica</li>
                  <li>Durabilidade excepcional</li>
                </ul>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="fas fa-flask"></i>
                </div>
                <h3>Bancada de Testes Exclusiva</h3>
                <p>
                  Rigorosos testes de qualidade e seguranca asseguram o desempenho e a confiabilidade em suas aplicacoes.
                </p>
                <ul className={styles.benefitList}>
                  <li>Testes rigorosos de qualidade</li>
                  <li>Segurança garantida</li>
                  <li>Desempenho comprovado</li>
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
                  Bracos e pincas projetados para maxima precisao e durabilidade em aplicacoes industriais.
                </p>
                
                <div className={styles.specsGrid}>
                  <div className={styles.specItem}>
                    <h4>Precisão</h4>
                    <p>Milimétrica para soldas perfeitas</p>
                  </div>
                  <div className={styles.specItem}>
                    <h4>Rigidez</h4>
                    <p>Alta estabilidade estrutural</p>
                  </div>
                  <div className={styles.specItem}>
                    <h4>Condutividade</h4>
                    <p>Alta condutividade elétrica</p>
                  </div>
                  <div className={styles.specItem}>
                    <h4>Resfriamento</h4>
                    <p>Sistema a água integrado</p>
                  </div>
                  <div className={styles.specItem}>
                    <h4>Adaptabilidade</h4>
                    <p>Diferentes tipos de eletrodos</p>
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
                  src="/bracosepincas/braco02.png"
                  alt="Especificações Técnicas dos Braços"
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
              Nossos braços são utilizados em diversos setores industriais
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
                <h4>Automação</h4>
                <p>Linhas de produção automatizadas</p>
              </div>
            </div>
            
            <div className="col-md-3 col-sm-6">
              <div className={styles.applicationCard}>
                <div className={styles.appIcon}>
                  <i className="fas fa-cogs"></i>
                </div>
                <h4>Maquinários</h4>
                <p>Equipamentos e maquinários industriais</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
                            <h2>Pronto para automatizar sua producao?</h2>
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
