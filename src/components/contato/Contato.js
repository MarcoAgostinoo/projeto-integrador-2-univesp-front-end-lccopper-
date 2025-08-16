import Image from "next/image";
import Link from "next/link";
import styles from "./contato.module.css";

export default function Contato() {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1 className={styles.title}>Entre em Contato</h1>
        <p className={styles.subtitle}>
          Estamos aqui para ajudar. Entre em contato conosco e responderemos o mais breve possível.
        </p>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Contact Information Section */}
        <div className={styles.contactSection}>
          <h2 className={styles.sectionTitle}>Informações de Contato</h2>
          
          <div className={styles.contactGrid}>
            {/* Phone Contact */}
            <div className={styles.contactCard}>
              <div className={styles.iconContainer}>
                <svg className={styles.icon} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div className={styles.contactInfo}>
                <h3>Telefone</h3>
                <p className={styles.contactText}>
                  <Link href="tel:+551146760398" className={styles.contactLink}>
                    (11) 4676-0398
                  </Link>
                </p>
                <p className={styles.contactText}>
                  <Link href="tel:+551146763092" className={styles.contactLink}>
                    (11) 4676-3092
                  </Link>
                </p>
                <p className={styles.contactText}>
                  <Link href="tel:+551146780506" className={styles.contactLink}>
                    (11) 4678-0506
                  </Link>
                </p>
              </div>
            </div>

            {/* Email Contact */}
            <div className={styles.contactCard}>
              <div className={styles.iconContainer}>
                <svg className={styles.icon} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div className={styles.contactInfo}>
                <h3>Email</h3>
                <p className={styles.contactText}>
                  <Link href="mailto:comercial@lccopper.com.br" className={styles.contactLink}>
                    comercial@lccopper.com.br
                  </Link>
                </p>
              </div>
            </div>

            {/* Address Contact */}
            <div className={styles.contactCard}>
              <div className={styles.iconContainer}>
                <svg className={styles.icon} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className={styles.contactInfo}>
                <h3>Endereço</h3>
                <p className={styles.contactText}>
                  Rua São João, 200 | Jardim Soeiro
                </p>
                <p className={styles.contactText}>
                  Ferraz de Vasconcelos - SP
                </p>
                <p className={styles.contactText}>
                  CEP 08540-200
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className={styles.formSection}>
          <h2 className={styles.sectionTitle}>Envie sua Mensagem</h2>
          <form className={styles.form}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  className={styles.formInput}
                  placeholder="Digite seu nome completo"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  className={styles.formInput}
                  placeholder="seu@email.com"
                  required
                />
              </div>
            </div>
            
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.formLabel}>
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  className={styles.formInput}
                  placeholder="(11) 99999-9999"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="company" className={styles.formLabel}>
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  className={styles.formInput}
                  placeholder="Nome da sua empresa"
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.formLabel}>
                Assunto *
              </label>
              <input
                type="text"
                id="subject"
                className={styles.formInput}
                placeholder="Assunto da mensagem"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>
                Mensagem *
              </label>
              <textarea
                id="message"
                className={styles.formTextarea}
                rows="6"
                placeholder="Digite sua mensagem aqui..."
                required
              />
            </div>

            <button type="submit" className={styles.formButton}>
              <svg className={styles.buttonIcon} fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>

      {/* Company Logo */}
      <div className={styles.logoSection}>
        <div className={styles.logoContainer}>
          <Image
            src="/logofootersf.png"
            alt="LC Copper Logo"
            width={250}
            height={60}
            className={styles.logo}
          />
        </div>
      </div>
    </div>
  );
}
