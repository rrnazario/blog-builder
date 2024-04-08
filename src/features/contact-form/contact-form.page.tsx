import { Button, TextField } from "@mui/material";
import { useState } from "react";
import StickyHeader from "src/components/StickyHeader";
import GlobalStyle from "src/global-style";
import './contact-form.css'
import YesNoCombo from "src/components/YesNoCombo/yesnocombo.component";
import LimitedTextField from "src/components/LimitedTextField/limited-text-field.component";

interface FormValues {
    name: string,
    peopleNumber?: number,
    hasDocs?: number,
    hasKids?: number,
    hasJob?: number,
    hasLivedAbroad?: number,
    speakAnotherLaguages?: number,
    whenCome?: string,
    workArea?: string,
    malagaPerspective?: string,
}

export default function ContactForm() {
    const [form, setForm] = useState<FormValues>({} as FormValues);
    const [sent, setSent] = useState<boolean>(false);

    const onSendInfo = async () => {
        if (!isFormValid()) return;

        let url = 'https://wa.me/34634462597?text=';

        url += `Nome: ${form.name}\n`
        if (form.peopleNumber) url += `Nº Pessoas: ${form.peopleNumber}\n`
        if (form.hasDocs) url += `Docs? ${form.hasDocs === 1 ? 'Sim' : 'Não'}\n`
        if (form.hasDocs) url += `Crianças? ${form.hasKids === 1 ? 'Sim' : 'Não'}\n`
        if (form.hasJob) url += `Emprego? ${form.hasJob === 1 ? 'Sim' : 'Não'}\n`
        if (form.hasLivedAbroad) url += `Morou fora antes? ${form.hasLivedAbroad === 1 ? 'Sim' : 'Não'}\n`
        if (form.speakAnotherLaguages) url += `Outros idiomas? ${form.speakAnotherLaguages === 1 ? 'Sim' : 'Não'}\n`
        if (form.whenCome) url += `Quando: ${form.whenCome}\n`
        if (form.workArea) url += `Área: ${form.workArea}\n`
        if (form.malagaPerspective) url += `Perspectiva: ${form.malagaPerspective}`

        window.open(encodeURI(url));
        await setSent(true);
    }

    const isFormValid = (): boolean => {
        if (!form.name || form.name.trim() === '') return false;

        return true;
    }

    return <>
        <GlobalStyle />
        <StickyHeader />
        <div className="container">
            {sent ? <h5>
                {'Você será redirecionado para o Whatsapp, confirme o envio da mensagem lá.'}</h5> : <>
                <h1>Formulario de contato</h1>

                <LimitedTextField
                    maxLength={30}
                    className='txt-box txt-box-medium'
                    id="nome"
                    label="Nome"
                    variant="standard"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    error={!form.name || form.name.trim() === ''}
                    helperText={!form.name || form.name.trim() === '' ? 'Campo obrigatório' : ''}
                />
                <TextField
                    className='txt-box txt-box-medium'
                    id="numero-pessoas"
                    label="Quantas pessoas virão com você?"
                    variant="standard"
                    type="number"
                    value={form.peopleNumber}
                    onChange={(e) => setForm({ ...form, peopleNumber: parseInt(e.target.value) })}
                />

                {form.peopleNumber && form.peopleNumber > 0 ? <YesNoCombo
                    id="virao-criancas"
                    label='Virão crianças com você?'
                    onChange={async (e) => await setForm({ ...form, hasKids: e })}
                    sx={{
                        width: 400,
                        mb: '20px'
                    }}
                /> : <></>}

                <YesNoCombo
                    id="possui-visto"
                    label='Possui visto para viver e trabalhar na Espanha?'
                    onChange={async (e) => await setForm({ ...form, hasDocs: e })}
                    sx={{
                        width: 400,
                        mb: '20px'
                    }}
                />

                <YesNoCombo
                    id="ja-vem-com-emprego"
                    label='Já vem com emprego garantido?'
                    onChange={async (e) => await setForm({ ...form, hasJob: e })}
                    sx={{
                        width: 400,
                        mb: '20px'
                    }}
                />

                <YesNoCombo
                    id="morou-em-outro-local"
                    label='Já morou em outro país além do Brasil?'
                    onChange={async (e) => await setForm({ ...form, hasLivedAbroad: e })}
                    sx={{
                        width: 400,
                        mb: '20px'
                    }}
                />

                <YesNoCombo
                    id="outros-idiomas"
                    label='Fala outro(s) idioma(s)?'
                    onChange={async (e) => await setForm({ ...form, speakAnotherLaguages: e })}
                    sx={{
                        width: 400,
                        mb: '20px'
                    }}
                />

                <LimitedTextField
                    maxLength={15}
                    className='txt-box txt-box-medium'
                    id="quando-pretende-mudar"
                    label="Quando pretende se mudar?"
                    variant="standard"
                    value={form.whenCome}
                    onChange={(e) => setForm({ ...form, whenCome: e.target.value })}
                />

                <LimitedTextField
                    maxLength={30}
                    className='txt-box txt-box-medium'
                    id="area-trabalho-atual"
                    label="Área de trabalho atual"
                    variant="standard"
                    value={form.workArea}
                    onChange={(e) => setForm({ ...form, workArea: e.target.value })}
                />

                <LimitedTextField
                    maxLength={100}
                    className='txt-box txt-box-medium'
                    id="perspectivas-malaga"
                    label="Quais suas perspectivas sobre Málaga?"
                    variant="outlined"
                    multiline
                    rows={4}
                    value={form.malagaPerspective}
                    onChange={(e) => setForm({ ...form, malagaPerspective: e.target.value })}
                />

                <Button
                    variant="contained"
                    onClick={onSendInfo}
                >
                    Enviar informações
                </Button>
            </>}
        </div>

    </>
}