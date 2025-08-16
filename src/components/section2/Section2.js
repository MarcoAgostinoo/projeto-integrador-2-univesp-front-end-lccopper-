import React from "react";
import Image from "next/image";
import { FaThumbsUp } from "react-icons/fa";
import styles from "./section2.module.css";

const Section2 = () => {
  return (
    <section className={styles.section2} aria-labelledby="section2-title">
      <div className={styles.section2Container}>
        <div className={styles.section2Grid}>
          {/* Coluna esquerda */}
          <div className={styles.section2Left}>
            <h2 id="section2-title" className={styles.section2Title}>
              Apresentação da LC Copper
            </h2>
            <h3 className={styles.section2Subtitle}>História e Inovação</h3>
            <p className={styles.section2Text}>
              Com uma sólida experiência, a LC Copper se destaca pela sua atuação no setor de reposição de solda por resistência. Nosso foco é oferecer soluções inovadoras para as montadoras de veículos leves e pesados do Brasil, sempre priorizando a qualidade e a eficiência em nossos serviços.
            </p>
            <p className={styles.section2Text}>
              Nossas instalações modernas, que cobrem uma área total de 5000 m², são equipadas com tecnologias de ponta. Trabalhamos com precisão em soldagem, costura e projeção, buscando sempre superar as expectativas de nossos clientes e garantir resultados excepcionais em cada projeto.
            </p>
            <div className={styles.section2Highlight}>
              <span>Incrível</span>
              <FaThumbsUp size={20} style={{ marginLeft: "0.5rem" }} />
            </div>
            <div className={styles.section2Buttons}>
              <button className={styles.btnPrimary} type="button">Saiba Mais</button>
              <button className={styles.btnSecondary} type="button">Nossos Produtos</button>
            </div>
          </div>
          {/* Coluna direita */}
          <div className={styles.section2Right}>
            <Image
              src="/quemsomos.jpg"
              alt="Equipe LC Copper em ação"
              width={500}
              height={500}
              className={styles.section2Image}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
