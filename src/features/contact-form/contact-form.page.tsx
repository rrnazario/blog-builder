import { Button, TextField } from "@mui/material";
import { useState } from "react";
import StickyHeader from "src/components/StickyHeader";
import GlobalStyle from "src/global-style";
import './contact-form.css'
import YesNoCombo from "src/components/YesNoCombo/yesnocombo.component";
import LimitedTextField from "src/components/LimitedTextField/limited-text-field.component";
import ContactFormService from "./contact-form.service";

interface FormValues {
    nome: string,
    whatsapp: string,
    quantasPessoas?: number,
    temDocumento?: boolean,
    temCrianca?: boolean,
    temEmprego?: boolean,
    JaViveuFora?: boolean,
    falaOutrosIdiomas?: boolean,
    quandoVem?: string,
    areaTrabalho?: string,
    perspectivaMalaga?: string,
}

export default function ContactForm() {
    const service = new ContactFormService();
    const [form, setForm] = useState<FormValues>({} as FormValues);
    const [sent, setSent] = useState<boolean>(false);

    const toWords = (text: string) => {
        const result = text.replace(/([A-Z])/g, " $1");
        return result.charAt(0).toUpperCase() + result.slice(1);
    }

    const defineValue = (value: any) => {
        if ((typeof value) === 'boolean')
            return value === true ? 'Sim' : 'Não'

        return value;
    }

    const onSendInfo = async () => {
        const maxTextAllowed = 1700;
        if (!isFormValid()) return;

        const props = Object.getOwnPropertyNames(form).filter(f => f !== 'whatsapp');

        let currentMessage = `Inicio da mensagem de '${form.whatsapp}'\n\n`;
        props.forEach(async (prop: string) => {
            
            
            
            if (currentMessage.length >= maxTextAllowed) {
                await service.sendMessage(currentMessage);
                currentMessage = '';
            }
            
            const tsKey = prop as keyof {}
            console.log(`${toWords(prop)}: ${defineValue(form[tsKey])}`);
        });


        return;

        // let url = `Nome: ${form.nome}\n`
        // url += `WhatsApp: ${form.whatsapp}\n`
        // if (form.quantasPessoas) url += `Nº Pessoas: ${form.quantasPessoas}\n`
        // if (form.temDocumento) url += `Docs? ${form.temDocumento === 1 ? 'Sim' : 'Não'}\n`
        // if (form.temDocumento) url += `Crianças? ${form.temCrianca === 1 ? 'Sim' : 'Não'}\n`
        // if (form.temEmprego) url += `Emprego? ${form.temEmprego === 1 ? 'Sim' : 'Não'}\n`
        // if (form.JaViveuFora) url += `Morou fora antes? ${form.JaViveuFora === 1 ? 'Sim' : 'Não'}\n`
        // if (form.falaOutrosIdiomas) url += `Outros idiomas? ${form.falaOutrosIdiomas === 1 ? 'Sim' : 'Não'}\n`
        // if (form.quandoVem) url += `Quando vem? ${form.quandoVem}\n`
        // if (form.areaTrabalho) url += `Área de trabalho: ${form.areaTrabalho}\n`
        // if (form.perspectivaMalaga) url += `Perspectiva: ${form.perspectivaMalaga}`

        //await service.sendMessage(url);
        //await setSent(true);
    }

    const isFormValid = (): boolean => {
        if (!form.nome || form.nome.trim() === '') return false;
        if (!form.whatsapp || form.whatsapp.trim() === '') return false;

        return true;
    }

    return <>
        <GlobalStyle />
        <StickyHeader />
        <div className="container">
            {sent ? <h5>
                {'Sua mensagem foi enviada com sucesso!'}</h5> : <>
                <h1>Formulario de contato</h1>

                <LimitedTextField
                    maxLength={30}
                    className='txt-box txt-box-medium'
                    id="nome"
                    label="Nome"
                    variant="standard"
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    error={!form.nome || form.nome.trim() === ''}
                    helperText={!form.nome || form.nome.trim() === '' ? 'Campo obrigatório' : ''}
                />

                <LimitedTextField
                    maxLength={30}
                    className='txt-box txt-box-medium'
                    id="wpp-contato"
                    label="Whatsapp"
                    variant="standard"
                    value={form.whatsapp}
                    onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                    error={!form.whatsapp || form.whatsapp.trim() === ''}
                    helperText={'Obrigatório (Adicione o código do país. Ex: +553298852-2331)'}
                />
                <TextField
                    className='txt-box txt-box-medium'
                    id="numero-pessoas"
                    label="Quantas pessoas virão com você?"
                    variant="standard"
                    type="number"
                    value={form.quantasPessoas}
                    onChange={(e) => setForm({ ...form, quantasPessoas: parseInt(e.target.value) })}
                />

                {form.quantasPessoas && form.quantasPessoas > 0 ? <YesNoCombo
                    id="virao-criancas"
                    label='Virão crianças com você?'
                    onChange={async (e) => await setForm({ ...form, temCrianca: e })}
                    sx={{
                        width: 400,
                        mb: '20px'
                    }}
                /> : <></>}

                <YesNoCombo
                    id="possui-visto"
                    label='Possui visto para viver e trabalhar na Espanha?'
                    onChange={async (e) => await setForm({ ...form, temDocumento: e })}
                    sx={{
                        width: 400,
                        mb: '20px'
                    }}
                />

                <YesNoCombo
                    id="ja-vem-com-emprego"
                    label='Já vem com emprego garantido?'
                    onChange={async (e) => await setForm({ ...form, temEmprego: e })}
                    sx={{
                        width: 400,
                        mb: '20px'
                    }}
                />

                <YesNoCombo
                    id="morou-em-outro-local"
                    label='Já morou em outro país além do Brasil?'
                    onChange={async (e) => await setForm({ ...form, JaViveuFora: e })}
                    sx={{
                        width: 400,
                        mb: '20px'
                    }}
                />

                <YesNoCombo
                    id="outros-idiomas"
                    label='Fala outro(s) idioma(s)?'
                    onChange={async (e) => await setForm({ ...form, falaOutrosIdiomas: e })}
                    sx={{
                        width: 400,
                        mb: '20px'
                    }}
                />

                <LimitedTextField
                    maxLength={25}
                    className='txt-box txt-box-medium'
                    id="quando-pretende-mudar"
                    label="Quando pretende se mudar?"
                    variant="standard"
                    value={form.quandoVem}
                    onChange={(e) => setForm({ ...form, quandoVem: e.target.value })}
                />

                <LimitedTextField
                    maxLength={50}
                    className='txt-box txt-box-medium'
                    id="area-trabalho-atual"
                    label="Área de trabalho atual"
                    variant="standard"
                    value={form.areaTrabalho}
                    onChange={(e) => setForm({ ...form, areaTrabalho: e.target.value })}
                />

                <LimitedTextField
                    maxLength={300}
                    className='txt-box txt-box-medium'
                    id="perspectivas-malaga"
                    label="Quais suas perspectivas sobre Málaga?"
                    variant="outlined"
                    multiline
                    rows={4}
                    value={form.perspectivaMalaga}
                    onChange={(e) => setForm({ ...form, perspectivaMalaga: e.target.value })}
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