import styles from "./cliente.module.css";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function Clientes() {
  return (
    <section className={styles.clientesSection}>
      <div className="container">
        <div className={styles.contentCard}>
          <h2 className={styles.sectionTitle}>Construindo Parcerias de Sucesso</h2>
          <p className={styles.sectionParagraph}>
            Na LC Copper, acreditamos que o sucesso do cliente é o nosso sucesso. Por isso, construímos relações fortes e duradouras com nossos parceiros, oferecendo soluções personalizadas e inovadoras que impulsionam seus negócios.
          </p>
          
          <div className={styles.imageGrid}>
            <div className={styles.box}>
              <img src="/clientesleft.png" alt="Logos de Clientes 1" className={styles.clientImage} />
            </div>
            <div className={styles.box}>
              <img src="/clientesright.png" alt="Logos de Clientes 2" className={styles.clientImage} />
            </div>
          </div>
          
          <p className={styles.testimonialParagraph}>
            Nossos clientes encontraram na LC Copper o parceiro ideal para a construção de seus projetos. Nossa equipe de engenheiros desenvolve soluções inovadoras e personalizadas para cada cliente, impulsionando o crescimento de suas empresas e elevando os seus padrões de qualidade.
          </p>
        </div>
      </div>
      
      {/* Seção CTA (Call to Action) */}
      <div className={styles.ctaSection}>
        <div className="container text-center">
          <h3 className={styles.ctaTitle}>Pronto para fazer parte da nossa rede de clientes?</h3>
          <p className={styles.ctaText}>
            Entre em contato e descubra como podemos impulsionar o sucesso do seu projeto com soluções personalizadas e inovadoras.
          </p>
          <Link href="https://api.whatsapp.com/send?l=pt&phone=551146760398" target="_blank" passHref legacyBehavior>
            <a className={styles.ctaButton}>
              Fale com nossa equipe <BsArrowRight style={{ verticalAlign: 'middle', marginLeft: '8px' }} />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}