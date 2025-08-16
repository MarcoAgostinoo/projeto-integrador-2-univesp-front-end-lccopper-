import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import styles from './apstructure.module.css';
import Image from "next/image";
import Link from "next/link";

export default function Apresentation() {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(inView);
  }, [inView]);

  return (
    <section
      ref={ref}
      className={`${styles.apstructurest} ${animate ? styles.visible : ""} container-fluid py-5`}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center min-vh-75">
          <div className="col-lg-6 col-md-5 d-none d-md-block">
            <div className={styles.imageContainer}>
              <Image
                className={`${styles.imgleft} img-fluid`}
                src="/trabalhe01.webp"
                alt="Equipe LC Copper trabalhando"
                width={600}
                height={800}
                priority
              />
              <div className={styles.imageOverlay}></div>
            </div>
          </div>
          <div className="col-lg-6 col-md-7 col-12">
            <div className={styles.contentWrapper}>
              <div className={styles.badge}>
                <span className="badge px-3 py-2 mb-3" style={{
                  background: 'linear-gradient(135deg, #05357e, #1173c6)',
                  color: 'white',
                  border: 'none'
                }}>
                  Eficiência, Inovação, Resultados
                </span>
              </div>
              
              <h1 className={`${styles.title} text-primary mb-4`}>
                Soluções Inovadoras em Soldagem e Automação Industrial
              </h1>
              
              <h2 className={`${styles.subtitle} text-secondary mb-4`}>
                Produtos de alta qualidade e serviços especializados para otimizar suas operações
              </h2>
              
              <p className={`${styles.description} text-muted mb-4`}>
                A LC Copper é uma empresa especializada na oferta abrangente de uma
                vasta gama de produtos e serviços voltados para o setor de soldagem e
                automação industrial. Nosso portfólio inclui uma variedade de itens
                essenciais, como Eletrodos, Porta Eletrodos, Braços, Cabos de Solda, Barramentos
                Fixos e Flexíveis, Pinças e Dispositivos para soldagem por resistência e projeção.
              </p>
              
              <div className={styles.ctaSection}>
                <h5 className="mb-4" style={{ color: '#05357e' }}>
                  Clique no botão abaixo e entre em contato com a nossa equipe para conhecer nossas soluções personalizadas!
                </h5>
                <Link 
                  href="https://api.whatsapp.com/send?l=pt&phone=551146760398" 
                  target="_blank" 
                  className={styles.ctaButton}
                >
                  <button className="btn btn-lg px-5 py-3" style={{
                    background: 'linear-gradient(135deg, #05357e, #1173c6)',
                    border: 'none',
                    color: 'white'
                  }}>
                    <i className="fab fa-whatsapp me-2"></i>
                    Fale Conosco
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
