import React, { useState, useEffect } from 'react';
import NavigationBar from "@/components/nav";
import Footer from "@/components/footer";
import {
    Card,
    CardBody,
    CardHeader,
    Input,
    Textarea,
    Button,
    Link,
    Tooltip
} from "@nextui-org/react";
import sty from "@/styles/contato.module.css";
import * as lucide from "lucide-react";

interface ButtonProps {
    title: string;
    url: string;
    icon: React.ElementType;
    color: "default" | "primary" | "success" | "danger";
}

const list: ButtonProps[] = [
    {
        title: "GitHub",
        url: "https://github.com/GeovaniOrsoli",
        icon: lucide.Github,
        color: "default",
    },
    {
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/geovani-orsoli/",
        icon: lucide.Linkedin,
        color: "primary",
    },
    {
        title: "Currículo",
        url: "https://docs.google.com/document/d/1nnljCgs-6u_tL711w67NUjOt4jQVmVH2jyN3xfTPrEE/edit?usp=sharing",
        icon: lucide.FileText,
        color: "success",
    },
    {
        title: "Email",
        url: "mailto:geovanispop@gmail.com",
        icon: lucide.Mail,
        color: "danger",
    },
];

export default function Contato() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        setIsButtonDisabled(!nome || !email || !text);
    }, [nome, email, text]);

    return (
        <>
            <NavigationBar />
            <div className="flex flex-col items-center justify-center py-8">
                <h1 className={sty.title}>CONTATO</h1>
            </div>

            <div className="flex items-center justify-center min-h-screen px-4 py-8">
                <Card className="max-w-md w-full">
                    <CardHeader className="text-center flex items-center justify-center py-4">
                        <h2 className="text-2xl text-default-500 font-semibold">Entre em contato</h2>
                    </CardHeader>
                    <CardBody>
                        <form action="https://formspree.io/f/mjvqzowo" method="POST">
                            <div className={sty.inputGroup}>
                                <Input
                                    id='nome'
                                    name='nome'
                                    label="Seu nome"
                                    isRequired
                                    fullWidth
                                    startContent={<lucide.User className="text-default-500" size={20} />}
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                />
                            </div>
                            <div className={sty.inputGroup}>
                                <Input
                                    id='email'
                                    name='email'
                                    type="email"
                                    label="Seu melhor email"
                                    isRequired
                                    fullWidth
                                    startContent={<lucide.Mail className="text-default-500" size={20} />}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className={sty.inputGroup}>
                                <Textarea
                                    id='msg'
                                    name='msg'
                                    label="Envie uma mensagem"
                                    isRequired
                                    maxLength={300}
                                    fullWidth 
                                    onChange={(e) => setText(e.target.value)}
                                    />
                            </div>
                            <div className={sty.inputGroup}>
                                <Button
                                    type="submit"
                                    color="warning"
                                    variant="flat"
                                    className="w-full"
                                    isDisabled={isButtonDisabled}
                                >
                                    Entrar em contato
                                </Button>
                            </div>
                        </form>
                    </CardBody>
                </Card>
            </div>

            <div className={sty.containerButton}>
                {list.map((item, index) => (
                    <Tooltip key={index} showArrow={true} color={item.color} content={item.title} placement="bottom">
                        <Button as={Link} href={item.url} className={sty.button} variant="flat" color={item.color} isIconOnly>
                            <item.icon className="w-24 w-24" />
                        </Button>
                    </Tooltip>
                ))}
            </div>
            <Footer />
        </>
    );
}
