import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import styles from './section3.module.css';
import Image from "next/image";
import { FaThumbsUp } from 'react-icons/fa';
import Link from "next/link";

export default function Section3() {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(inView);
  return (
    <section
      ref={ref}
      className={`${styles.apstructurest} ${animate ? styles.visible : ""}`}
      style={{ background: '#f5f5f5', padding: '48px 0' }}
    >
      <div className="container">
        <div className="row align-items-center" style={{ minHeight: '250px' }}>
          {/* Lado esquerdo */}
          <div className="col-md-6">
            <div style={{ background: '#fff', borderRadius: '18px', boxShadow: '0 4px 16px rgba(196,127,42,0.10)', padding: '32px' }}>
              <h2 className="section-title" style={{ color: '#c47f2a', fontWeight: 700 }}>Apresentação da LC Copper</h2>
              <h4 className="section-subtitle" style={{ color: '#c47f2a', fontWeight: 600 }}>História e Inovação</h4>
              <p className="section-text" style={{ color: '#444', fontSize: '1.08rem' }}>
                Com uma sólida experiência , a LC Copper se destaca pela sua atuação no setor de reposição de solda por resistência. Nosso foco é oferecer soluções inovadoras para as montadoras de veículos leves e pesados do Brasil, sempre priorizando a qualidade e a eficiência em nossos serviços.
              </p>
              <p className="section-text" style={{ color: '#444', fontSize: '1.08rem' }}>
                Nossas instalações modernas, que cobrem uma área total de 5000 m², são equipadas com tecnologias de ponta. Trabalhamos com precisão em soldagem, costura e projeção, buscando sempre superar as expectativas de nossos clientes e garantir resultados excepcionais em cada projeto.
              </p>
            </div>
          </div>
          {/* Lado direito */}
          <div className="col-md-6 text-center">
            <div style={{ background: '#fff', borderRadius: '18px', boxShadow: '0 4px 16px rgba(196,127,42,0.10)', padding: '32px' }}>
              <Image src="/estrutura.png" alt="Estrutura LC Copper" width={400} height={250} className="img-fluid rounded shadow" />
              <div style={{ marginTop: 24 }}>
                <FaThumbsUp size={48} color="#c47f2a" />
                <h5 style={{ color: '#c47f2a', fontWeight: 700, marginTop: 12 }}>Excelência Estrutural</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
          <div className="col-md-6">
            <Image
              src="/quemsomos.jpg" // Substitua pelo caminho da sua imagem
              alt="Descrição da Imagem"
              width={500}
              height={550}
              className="img-fluid rounded shadow-lg mt-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
