import React,{ useState } from 'react';

import logoImg from '../../assets/logo.svg';
import {Link} from 'react-router-dom';
//import { FiPower, FiTrash2 } from 'react-icons/fi'; 
import { FiArrowLeft } from 'react-icons/fi'; 

import api from '../../services/api';
import './style.css';

export default function NewIncident(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };

        try {
            await api.post('incident', data)
        } catch (err) {
            alert ('Erro ao cadastrar caso, tente novamente.')
        }
    }

    return (
        <div className="newIncident-container">
        <div className="content">
            <section>
                <img src={logoImg} alt= "Be the Hero"/>
                    <h1> Cadastrar Novo Caso </h1>
                    <p> Descreva o caso detalhadamente para encontrar um herói para resolver isso. </p>
                        <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/>
                              Voltar para Home
                        </Link>
            </section>

            <form onSubmit={handleNewIncident}>
                <input 
                  placeholder="Título do Caso"
                  value={title}
                  onChange={e => setTitle(e.target.value)} />

                <textarea 
                  placeholder="Descrição"
                  value={description}
                  onChange={e => setDescription(e.target.value)} />

                <input 
                  placeholder="Valor em Reais"
                  value={value}
                  onChange={e => setValue(e.target.value)} />


                <button className="button" type="submit"> Cadastrar </button>    
            </form>        
        </div>
    </div>
    )
}