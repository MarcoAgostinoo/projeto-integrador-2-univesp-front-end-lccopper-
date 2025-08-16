// CompanyOverview.tsx
import React from "react";
import Link from "next/link";
import { Building, GraphUp, Gear, Tools, Bezier2, Lightning, Award, People } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./companyOverview.module.css";

export default function CompanyOverview() {
  return (
    <div className={styles.companyContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className="row align-items-center min-vh-75">
            <div className="col-lg-12 text-center">
              <span className={styles.heroBadge}>25 anos de excelência</span>
              <h1 className={styles.heroTitle}>
                <Building style={{ verticalAlign: 'middle' }} />
                <span> LC Copper Metalúrgica Ltda.</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Transformando metal em soluções inovadoras para a indústria.
              </p>
              <div className={styles.heroButtons}>
                <Link href="/contato" className={`btn ${styles.primaryBtn}`}>
                  Fale Conosco
                </Link>
                <Link href="#beneficios" className={`btn ${styles.secondaryBtn}`}>
                  Nossos Diferenciais
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className={styles.benefitsSection}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className={styles.sectionTitle}>Por que escolher a LC Copper?</h2>
            <p className={styles.sectionSubtitle}>
              Experiência, inovação e tecnologia de ponta para atender os setores mais exigentes.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}><GraphUp /></div>
                <h3>Excelência em Metalurgia</h3>
                <p>Especialistas em ligas de cobre com aplicações na indústria automotiva e muito mais.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}><Gear /></div>
                <h3>Tecnologia de Ponta</h3>
                <ul className={styles.benefitList}>
                  <li><Tools style={{ verticalAlign: 'middle', color: '#1173c6' }} /> Fundição de até 2 ton/dia</li>
                  <li><Bezier2 style={{ verticalAlign: 'middle', color: '#1173c6' }} /> Usinagem CNC de precisão</li>
                  <li><Lightning style={{ verticalAlign: 'middle', color: '#1173c6' }} /> Soluções personalizadas em soldagem</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}><Award /></div>
                <h3>Qualidade Garantida</h3>
                <p>Padrões rigorosos de qualidade que superam as expectativas dos clientes mais exigentes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parcerias */}
      <section className={styles.partnersSection}>
        <div className="container text-center">
          <h2 className={styles.sectionTitle}>
            <People style={{ verticalAlign: 'middle' }} />
            <span> Parceria e Inovação</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Trabalhamos lado a lado com nossos clientes, desenvolvendo soluções que impulsionam o crescimento mútuo.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container text-center">
          <h2>Pronto para elevar seu projeto?</h2>
          <p>
            Nossa expertise em metalurgia está à sua disposição para transformar ideias em realidade.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/contato" className={`btn ${styles.primaryBtn}`}>
              Solicitar Orçamento
            </Link>
            <Link href="/produtos" className={`btn ${styles.secondaryBtn}`}>
              Ver Produtos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}