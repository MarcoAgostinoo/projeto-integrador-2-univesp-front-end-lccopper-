import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import styles from "./presentation.module.css";

export default function Presentation() {
  const { ref, inView } = useInView({ threshold: 0.09 });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(inView);
  }, [inView]);

  const services = [
    {
      icon: "bi bi-wrench",
      title: "Reposição de Solda",
      description: "Com quase 25 anos de experiência, oferecemos soluções de solda por resistência para a indústria automotiva, garantindo qualidade e eficiência."
    },
    {
      icon: "bi bi-gear-fill",
      title: "Usinagem de Materiais",
      description: "Trabalhamos com materiais ferrosos e não ferrosos, atendendo as demandas das principais montadoras do país."
    },
    {
      icon: "bi bi-robot",
      title: "Automação Industrial",
      description: "Nossos braços para robôs e pinças de solda oferecem precisão milimétrica e durabilidade incomparável."
    },
    {
      icon: "bi bi-file-earmark-person",
      title: "Consultoria Técnica",
      description: "Oferecemos consultoria especializada para otimizar seus processos de soldagem e automação."
    },
    {
      icon: "bi bi-tools",
      title: "Manutenção de Equipamentos",
      description: "Realizamos manutenção preventiva e corretiva, assegurando a longevidade e desempenho dos seus equipamentos."
    },
    {
      icon: "bi bi-box",
      title: "Fornecimento de Materiais",
      description: "Da matéria-prima ao produto final, garantimos o fornecimento de materiais de alta qualidade."
    }
  ];

  return (
    <div ref={ref} className={`${styles.serviceBgArea} ${animate ? styles.visible : ""}`}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>NOSSOS SERVIÇOS</h2>
          <h3>Conforto e Qualidade em Soldagem</h3>
          <h1>LC Copper Metalúrgica</h1>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceItem}>
              <div className={styles.textBox}>
                <i className={service.icon}></i>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.callToAction}>
          <a 
            href="https://api.whatsapp.com/send?l=pt&phone=551146760398" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </div>
  );
}
