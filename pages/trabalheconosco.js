"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import api from "../services/api";
import NavBar from "../src/components/navbar/NavBar";
import Footer from "../src/components/footer/Footer";
import styles from './trabalhe.module.css';
import BannerOneimg from "../src/components/banneronepages/BannerOneimg";
import CareerOpportunity from "../src/components/carrear/CareerOpportunity";

// Ícones SVG inline para melhor performance
const Icons = {
    requirements: () => (
        <svg className={styles.vagaInfoIcon} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
    ),
    salary: () => (
        <svg className={styles.vagaInfoIcon} fill="currentColor" viewBox="0 0 20 20">
            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
        </svg>
    ),
    location: () => (
        <svg className={styles.vagaInfoIcon} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
    ),
    upload: () => (
        <svg className={styles.vagaInfoIcon} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
    )
};

export default function Vagas() {
    const [vagasCdt, setVagasCdt] = useState([]);
    const [loading, setLoading] = useState(false);
    const [submitLoading, setSubmitLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });
    const [dragOver, setDragOver] = useState(false);
    const [formData, setFormData] = useState({
        nome: '',
        telefone: '',
        endereco: '',
        vagadeinteresse: '',
        curriculo: null,
    });

    useEffect(() => {
        const fetchVagas = async () => {
            setLoading(true);
            try {
                const response = await api.get("/vagas");
                setVagasCdt(response.data);
            } catch (error) {
                console.error("Error fetching vagas:", error);
                setMessage({ type: 'error', text: 'Erro ao carregar as vagas. Tente novamente.' });
            } finally {
                setLoading(false);
            }
        };

        fetchVagas();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        // Limpar mensagens quando o usuário começar a digitar
        if (message.text) {
            setMessage({ type: '', text: '' });
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Validar tipo de arquivo
            if (!file.type.includes('pdf') && !file.type.includes('text')) {
                setMessage({ type: 'error', text: 'Por favor, selecione apenas arquivos PDF ou TXT.' });
                return;
            }
            // Validar tamanho (máximo 5MB)
            if (file.size > 5 * 1024 * 1024) {
                setMessage({ type: 'error', text: 'O arquivo deve ter no máximo 5MB.' });
                return;
            }
            
            setFormData({
                ...formData,
                curriculo: file,
            });
            setMessage({ type: 'success', text: `Arquivo "${file.name}" selecionado com sucesso!` });
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragOver(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setDragOver(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragOver(false);
        
        const file = e.dataTransfer.files[0];
        if (file) {
            const event = { target: { files: [file] } };
            handleFileChange(event);
        }
    };

    const validateForm = () => {
        if (!formData.nome.trim()) {
            setMessage({ type: 'error', text: 'Por favor, preencha seu nome.' });
            return false;
        }
        if (!formData.telefone.trim()) {
            setMessage({ type: 'error', text: 'Por favor, preencha seu telefone.' });
            return false;
        }
        if (!formData.endereco.trim()) {
            setMessage({ type: 'error', text: 'Por favor, preencha seu endereço.' });
            return false;
        }
        if (!formData.vagadeinteresse.trim()) {
            setMessage({ type: 'error', text: 'Por favor, especifique a vaga de interesse.' });
            return false;
        }
        if (!formData.curriculo) {
            setMessage({ type: 'error', text: 'Por favor, anexe seu currículo.' });
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setSubmitLoading(true);
        setMessage({ type: '', text: '' });

        try {
            // Simular envio para API (substitua pela sua implementação real)
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            setMessage({ 
                type: 'success', 
                text: 'Candidatura enviada com sucesso! Entraremos em contato em breve.' 
            });
            
            // Limpar formulário
            setFormData({
                nome: '',
                telefone: '',
                endereco: '',
                vagadeinteresse: '',
                curriculo: null,
            });
            
            // Limpar input de arquivo
            const fileInput = document.getElementById('curriculo');
            if (fileInput) fileInput.value = '';
            
        } catch (error) {
            console.error("Error submitting application:", error);
            setMessage({ 
                type: 'error', 
                text: 'Erro ao enviar candidatura. Tente novamente.' 
            });
        } finally {
            setSubmitLoading(false);
        }
    };

    return (
        <div className={styles.vagastyle}>
            <NavBar />
            <BannerOneimg title="Trabalhe Conosco" />
            
            <div className={styles.vagasContainer}>
                <div className={styles.pageHeader}>
                    <h1 className={styles.pageTitle}>Vagas Disponíveis</h1>
                    <p className={styles.pageSubtitle}>
                        Junte-se à nossa equipe e faça parte de uma empresa que valoriza o talento, 
                        a inovação e o crescimento profissional.
                    </p>
                </div>

                {loading ? (
                    <div style={{ textAlign: 'center', padding: '50px' }}>
                        <div className={styles.loadingSpinner}></div>
                        <p>Carregando vagas...</p>
                    </div>
                ) : (
                    <div className={styles.vagasList}>
                        {vagasCdt.map((vaga) => (
                            <div key={vaga.id} className={styles.vagaCard}>
                                <h2 className={styles.vagaTitle}>{vaga.nome}</h2>
                                <p className={styles.vagaDescription}>{vaga.descricao}</p>
                                
                                <div className={styles.vagaInfo}>
                                    <div className={styles.vagaInfoItem}>
                                        <Icons.requirements />
                                        <div className={styles.vagaInfoText}>
                                            <span className={styles.vagaInfoLabel}>Requisitos:</span>
                                            {vaga.requisitos}
                                        </div>
                                    </div>
                                    
                                    <div className={styles.vagaInfoItem}>
                                        <Icons.salary />
                                        <div className={styles.vagaInfoText}>
                                            <span className={styles.vagaInfoLabel}>Salário:</span>
                                            {vaga.salario}
                                        </div>
                                    </div>
                                    
                                    <div className={styles.vagaInfoItem}>
                                        <Icons.location />
                                        <div className={styles.vagaInfoText}>
                                            <span className={styles.vagaInfoLabel}>Localização:</span>
                                            {vaga.localizacao}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className={styles.applicationSection}>
                    <div className={styles.applicationHeader}>
                        <h2 className={styles.applicationTitle}>Candidatar-se</h2>
                        <p className={styles.applicationSubtitle}>
                            Preencha o formulário abaixo para se candidatar a uma de nossas vagas. 
                            Nossa equipe de RH entrará em contato em breve.
                        </p>
                    </div>

                    <form className={styles.applicationForm} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label className={styles.formLabel}>Nome Completo *</label>
                            <input
                                type="text"
                                name="nome"
                                className={styles.formInput}
                                placeholder="Digite seu nome completo"
                                value={formData.nome}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.formLabel}>Telefone *</label>
                            <input
                                type="tel"
                                name="telefone"
                                className={styles.formInput}
                                placeholder="(11) 99999-9999"
                                value={formData.telefone}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.formLabel}>Endereço *</label>
                            <input
                                type="text"
                                name="endereco"
                                className={styles.formInput}
                                placeholder="Digite seu endereço completo"
                                value={formData.endereco}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.formLabel}>Vaga de Interesse *</label>
                            <input
                                type="text"
                                name="vagadeinteresse"
                                className={styles.formInput}
                                placeholder="Especifique a vaga desejada"
                                value={formData.vagadeinteresse}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className={styles.fileInputContainer}>
                            <label 
                                htmlFor="curriculo" 
                                className={`${styles.fileLabel} ${dragOver ? styles.dragover : ''}`}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                            >
                                <Icons.upload />
                                {formData.curriculo 
                                    ? `Arquivo selecionado: ${formData.curriculo.name}`
                                    : 'Arraste seu currículo aqui ou clique para selecionar (PDF ou TXT, máx. 5MB)'
                                }
                            </label>
                            <input
                                type="file"
                                name="curriculo"
                                id="curriculo"
                                className={styles.fileInput}
                                accept=".pdf,.txt"
                                onChange={handleFileChange}
                                required
                            />
                        </div>

                        {message.text && (
                            <div className={message.type === 'success' ? styles.successMessage : styles.errorMessage}>
                                {message.text}
                            </div>
                        )}

                        <button 
                            type="submit" 
                            className={styles.submitButton}
                            disabled={submitLoading}
                        >
                            {submitLoading && <div className={styles.loadingSpinner}></div>}
                            {submitLoading ? 'Enviando...' : 'Enviar Candidatura'}
                        </button>
                    </form>
                </div>
            </div>

            <CareerOpportunity />
            <Footer />
        </div>
    );
}
