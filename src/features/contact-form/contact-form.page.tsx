import { Button, TextField } from "@mui/material";
import { useState } from "react";
import StickyHeader from "src/components/StickyHeader";
import GlobalStyle from "src/global-style";
import './contact-form.css'

interface FormValues {
    name: string,
}

export default function ContactForm() {
    const [form, setForm] = useState<FormValues>({} as FormValues);

    const onSendInfo = () => {
        if (!isFormValid()) return;

        let url = 'https://wa.me/634462597?text=';

        url += `*Nome: *${form.name}`

        window.open(encodeURI(url));
    }

    const isFormValid = (): boolean => {
        if (!form.name || form.name.trim() === '') return false;

        return true;
    }

    return <>
        <GlobalStyle />
        <StickyHeader />
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px'
        }}>
            <h1>Formulario de contato</h1>
            <TextField
                className='txt-box txt-box-medium'
                id="nome"
                label="Nome"
                variant="outlined"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                error={!form.name || form.name.trim() === ''}
                helperText={!form.name || form.name.trim() === '' ? 'Campo obrigatório' : ''}
            />
            <Button
                variant="contained"
                onClick={onSendInfo}
            >
                Enviar informações
            </Button>
        </div>

    </>
}