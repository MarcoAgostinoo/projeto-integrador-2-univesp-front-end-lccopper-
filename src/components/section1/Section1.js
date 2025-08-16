"use client";

import React, { useRef } from "react";
import { FaBullseye, FaCog, FaBolt } from 'react-icons/fa';
import styles from './section1.module.css';

function Section1() {
    const sectionRef = useRef(null);

    return (
        <div ref={sectionRef} className={`${styles.sectionContainer} container-fluid`}>
            {/* Seção de Texto Principal */}
            <div className='row'>
                <div className='col-12 text-center'>
                    <h1 className={styles.mainTitle}>
                        Resultados Concretos para a Indústria de Ponta
                    </h1>
                </div>
                <div className='col-12 mt-4 text-center'>
                    <p className={styles.mainParagraph}>
                        Há mais de 25 anos, a LC Copper é a parceira estratégica das principais montadoras e indústrias do Brasil. Nossa expertise em soluções industriais de alta performance e uma estrutura de 5.000 m² equipada com tecnologia de ponta nos permitem entregar confiança e inovação para os projetos mais desafiadores. Elevamos o padrão de qualidade e competitividade do seu negócio, garantindo que sua empresa esteja sempre à frente no mercado.
                    </p>
                </div>
            </div>

            {/* Seção de Benefícios */}
            <div className='row justify-content-center mt-5'>
                <div className={`col-12 col-md-4 text-center ${styles.benefitCard}`}>
                    <div className={styles.iconContainer}>
                        <FaBullseye className={styles.benefitIcon} />
                    </div>
                    <h2 className={styles.cardTitle}>Precisão Inquestionável</h2>
                    <p className={styles.cardText}>
                        Garantimos a conformidade e a performance que seu projeto exige, minimizando riscos e otimizando custos. Nossa atenção aos detalhes é o pilar da sua tranquilidade.
                    </p>
                </div>

                <div className={`col-12 col-md-4 text-center ${styles.benefitCard}`}>
                    <div className={styles.iconContainer}>
                        <FaCog className={styles.benefitIcon} />
                    </div>
                    <h2 className={styles.cardTitle}>Flexibilidade Estratégica</h2>
                    <p className={styles.cardText}>
                        Adaptamos nossas soluções para atender às demandas únicas do seu negócio, integrando-nos perfeitamente às suas operações e metas.
                    </p>
                </div>

                <div className={`col-12 col-md-4 text-center ${styles.benefitCard}`}>
                    <div className={styles.iconContainer}>
                        <FaBolt className={styles.benefitIcon} />
                    </div>
                    <h2 className={styles.cardTitle}>Agilidade para Crescer</h2>
                    <p className={styles.cardText}>
                        Com processos otimizados e uma equipe dedicada, oferecemos um atendimento rápido e eficiente, acelerando o ciclo de seus projetos e o crescimento da sua empresa.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Section1;