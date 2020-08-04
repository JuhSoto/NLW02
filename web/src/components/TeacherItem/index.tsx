import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';
function TeacherItem () {
    return (

        <article className="teacher-item">
                    <header>
                        <img src="https://avatars1.githubusercontent.com/u/42661353?s=460&u=cff5e74f4a0c32023983d9ed3ac765cfa55946dd&v=4" alt="Julia Soto"/>
                    <div>
                        <strong>Julia Soto</strong>
                        <span>Quimica</span>
                    </div>
                    </header>
                    <p>
                        Entusiasta das melhores tecnologias de quimica avançada.
                    </p>
                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whasapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    );
}
export default TeacherItem;