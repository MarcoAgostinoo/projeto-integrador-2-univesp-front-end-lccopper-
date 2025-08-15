import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';   

import { FaBars, FaTimes, FaHome, FaInfoCircle, FaBox, FaEnvelope, FaPhone, FaWhatsapp, FaBriefcase } from 'react-icons/fa'; // Substituindo FaHandshake por FaBox
import styles from './navbar.module.css';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { href: '/', label: 'Início', icon: <FaHome /> },
    { href: '/quemsomos', label: 'Quem Somos', icon: <FaInfoCircle /> },
    { href: '/produtos', label: 'Produtos', icon: <FaBox /> }, // Substituindo FaHandshake por FaBox
    { href: '/trabalheconosco', label: 'Trabalhe na LC Copper', icon: <FaBriefcase /> },
    { href: '/contato', label: 'Contato', icon: <FaEnvelope /> },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.topBar} ${scrolled ? styles.hidden : ''}`}>
        <div className={styles.contactInfo}>
          <span className={styles.contactName}>Contato LC Copper - Comercial</span>
          <a href="tel:+551146760398" className={styles.contactItem}>
            <FaPhone /> (11) 4676-0398
          </a>
          
          {/* <a href="https://wa.me/551146763092" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
            <FaWhatsapp /> (11) 4676-3092
          </a> */}
          <a href="tel:+551146763092" className={styles.contactItem}>
            <FaPhone /> (11) (11) 4676-3092
          </a>
          <a href="tel:+551146780506" className={styles.contactItem}>
            <FaPhone /> (11) 4678-0506
          </a>
          <a href="mailto:comercial@lccopper.com.br" className={styles.contactItem}>
            <FaEnvelope /> comercial@lccopper.com.br
          </a>
        </div>
      </div>
      <div className={`${styles.navContainer} ${scrolled ? styles.scrolled : ''}`}>
        <Link href="/" legacyBehavior>
          <a className={styles.logo}>
            <Image
              src="/logo01.png"
              alt="LC Copper Logo"
              width={220}
              height={40}
            />
          </a>
        </Link>
        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
          {navItems.map((item) => (
            <li key={item.href} className={styles.navItem}>
              <Link href={item.href} legacyBehavior>
                <a
                  className={`${styles.navLink} ${router.pathname === item.href ? styles.active : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
