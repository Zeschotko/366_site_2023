'use client';

import Image from 'next/image';
import { FormEvent, useState } from 'react';

import Axios from '@/lib/axios';
import { Message } from '@/lib/interfaces';
import Play from '../assets/play.svg';

export function Form() {
    const [textBtn, setTextBtn] = useState<string>('Enviar mensagem');
    const [disableBtn, setDisableBtn] = useState<boolean>(false);
    const [form, setForm] = useState<Message>({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    function handleValueForm(value: string, key: string) {
        setForm({ ...form, [key]: value });
    }

    async function send(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setDisableBtn(true);
        setTextBtn('Enviando...');
        await Axios.post('api/send', form)
            .then((response) => {
                setForm({ name: '', email: '', phone: '', message: '' });
                setTextBtn('Enviado com sucesso.');
            })
            .finally(() => {
                setTimeout(() => {
                    setDisableBtn(false);
                    setTextBtn('Enviar');
                }, 5000);
            });
    }

    return (
        <form onSubmit={send} className="order-2 lg:order-1 lg:w-6/12">
            <input
                type="text"
                placeholder="Nome"
                className="mb-5 block w-full rounded-lg bg-[#4E4141] px-8 py-4"
                required
                onChange={(event) => handleValueForm(event.target.value, 'name')}
                value={form.name}
            />
            <input
                type="text"
                placeholder="E-mail"
                className="mb-5 block w-full rounded-lg bg-[#4E4141] px-8 py-4"
                required
                onChange={(event) => handleValueForm(event.target.value, 'email')}
                value={form.email}
            />
            <input
                type="text"
                placeholder="Celular"
                className="mb-5 block w-full rounded-lg bg-[#4E4141] px-8 py-4"
                required
                onChange={(event) => handleValueForm(event.target.value, 'phone')}
                value={form.phone}
            />
            <textarea
                placeholder="Mensagem"
                className="mb-5 block w-full resize-none rounded-lg bg-[#4E4141] px-8 py-4"
                required
                onChange={(event) => handleValueForm(event.target.value, 'message')}
                value={form.message}
            />
            <button
                type="submit"
                disabled={disableBtn}
                className="inline-block rounded-full bg-gradientRed bg-200% px-12 py-3 text-defaultBlack transition-all duration-300 hover:bg-right disabled:opacity-50"
            >
                {textBtn}
                <Image src={Play} alt="" className="ml-2.5 inline-block h-4 w-4" />
            </button>
        </form>
    );
}
