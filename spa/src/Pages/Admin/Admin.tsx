import React, {useState} from 'react';
import Input from '../../_components/Input/Input';
import Button from '../../_components/Button/Button';
import Feedback from "../../_components/Feedback/Feedback.tsx";
import logo from '../../Image/lucas_silva-removebg-preview.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import style from './Admin.module.scss';

export default function Login() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('')
    const [feedback, setFeedback] = useState(false);
    const [message, setMessage] = useState('');
    const [color, setColor] = useState('');
    const [textColor, setTextColor] = useState('');

    const handleLogin = async (e: React.FormEvent) => { e.preventDefault();
        if (!usuario.trim() || !senha.trim()) {
            setMessage('Informe os campos abaixo!');
            setFeedback(true);
            setColor('yellow');
            setTextColor('black');
            setTimeout(() => setFeedback(false), 3000);
            return;
        }

        try {
            const response = await fetch('https://instituto-lucas-silva/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: usuario,
                    password: senha,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setFeedback(true);
                setMessage('Login realizado com sucesso!');
                setColor('#71c55b');
                setTextColor('white');
                setTimeout(() => setFeedback(false), 3000);
                localStorage.setItem('token', data.access_token);
            } else {
                setFeedback(true);
                setMessage('Email e/ou senha inválidos!');
                setColor('red');
                setTextColor('white');
                setTimeout(() => setFeedback(false), 3000);
            }
        } catch (error) {
            setFeedback(true);
            setMessage('Problema ao se comunicar com o servidor');
            setColor('red');
            setTextColor('white');
            setTimeout(() => setFeedback(false), 3000);
        }
    };

    return (
        <>
            <a href="/" className="ms-4 mt-3 d-block"><FontAwesomeIcon icon={faHome} color="#44b4cc" size="lg"/></a>
            <div className={style.feedbackContainer}>
                {feedback && (
                    <Feedback
                        text={message}
                        color={color}
                        textColor={textColor}
                        width={300}
                        height={70}
                    />
                )}
            </div>
            <div className={style.container}>
                <div className="card shadow-sm p-4" style={{ width: '100%', maxWidth: '400px' }}>
                    <div className="text-center mb-4">
                        <img
                            src={logo}
                            alt="Instituto Lucas Silva"
                            style={{ width: '200px' }}
                            className="img-fluid"
                        />
                    </div>

                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <Input
                                placeholder="Usuário"
                                type="text"
                                onChange={e => setUsuario(e.target.value)}
                                value={usuario}
                            />

                        </div>

                        <div className="mb-4">
                            <Input
                                placeholder="Senha"
                                type="password"
                                onChange={e => setSenha(e.target.value)}
                                value={senha}
                            />
                        </div>

                        <div className="d-grid">
                            <Button type="submit" text="Entrar" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
