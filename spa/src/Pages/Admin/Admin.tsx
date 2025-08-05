import React, {useState} from 'react';
import Input from '../../_components/Input/Input';
import Button from '../../_components/Button/Button';
import logo from '../../Image/lucas_silva-removebg-preview.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import style from './Admin.module.scss';

export default function Login() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('')

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

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
                alert('Login realizado com sucesso!');
                localStorage.setItem('token', data.access_token);
            } else {
                alert(data.message || 'Erro no login');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    };

    return (
        <>
            <a href="/" className="ms-4 mt-3 d-block"><FontAwesomeIcon icon={faHome} color="#44b4cc" size="lg"/></a>
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
