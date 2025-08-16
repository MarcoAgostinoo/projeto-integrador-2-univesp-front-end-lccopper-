import React from 'react';
import styles from './quemsomos.module.css';
import { BsFillHouseFill, BsEyeFill, BsStarFill, BsPeopleFill, BsGraphUp, BsBuilding } from "react-icons/bs";

const Quemsomoscomp = () => (
  <section className={styles.container}>
    {/* Seção Principal: Quem Somos */}
    <div className={styles.introCard}>
      <h1 className={styles.mainTitle}>
        <BsBuilding /> Quem Somos
      </h1>
      <p className={styles.mainParagraph}>
        Somos uma empresa dedicada à inovação e excelência em metalurgia, com foco em soluções de cobre para diversos setores industriais. Nossa história é construída com base em confiança, precisão e parceria com nossos clientes.
      </p>
    </div>

    {/* Missão e Visão */}
    <div className={styles.mvvSection}>
      <div className={styles.mvvItem}>
        <h2 className={styles.subtitle}><BsEyeFill /> Missão</h2>
        <p className={styles.paragraph}>
          Manufaturar produtos que atendam com prontidão e até superem as necessidades dos mais complexos processos de nossos parceiros, elevando o padrão de qualidade da indústria.
        </p>
      </div>
      <div className={styles.mvvItem}>
        <h2 className={styles.subtitle}><BsStarFill /> Visão</h2>
        <p className={styles.paragraph}>
          Ser reconhecida pelas partes interessadas como uma Organização cujo desempenho seja digno de um fornecedor eficiente, eficaz e efetivo.
        </p>
      </div>
    </div>

    {/* Seção de Valores */}
    <div className={styles.valoresSection}>
      <h2 className={styles.sectionTitle}>Nossos Valores</h2>
      <div className={styles.grid}>
        <div className={styles.box}>
          <div className={styles.iconWrapper}><BsFillHouseFill /></div>
          <h4>Bom Nome</h4>
          <p>Conduzir nossos negócios com ética, legalidade e excelência em todas as nossas operações.</p>
        </div>
        <div className={styles.box}>
          <div className={styles.iconWrapper}><BsPeopleFill /></div>
          <h4>Foco no Cliente</h4>
          <p>Ouvir, responder e valorizar nossos clientes, garantindo a qualidade superior de produtos e serviços.</p>
        </div>
        <div className={styles.box}>
          <div className={styles.iconWrapper}><BsPeopleFill /></div>
          <h4>Nossos Funcionários</h4>
          <p>Tratar com dignidade, respeito e recompensar de forma justa, estimulando o desenvolvimento através de orientação e treinamento.</p>
        </div>
        <div className={styles.box}>
          <div className={styles.iconWrapper}><BsGraphUp /></div>
          <h4>Rentabilidade</h4>
          <p>Garantir valorização através de rendimentos lucrativos e sustentáveis, otimizando processos para ser o fabricante de menor custo.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Quemsomoscomp;