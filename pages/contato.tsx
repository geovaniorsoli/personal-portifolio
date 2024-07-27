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

interface button {
    title: string,
    url: string,
    icon: React.ElementType,
    color: "default" | "primary" | "success" | "danger",
}

const list: button[] = [
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
                        <form>
                            <div className={sty.inputGroup}>
                                <Input label="Seu nome" isRequired fullWidth startContent={
                                    <lucide.User className="text-default-500" size={20} />
                                } />
                            </div>
                            <div className={sty.inputGroup}>
                                <Input type="email" label="Seu melhor email" isRequired fullWidth startContent={
                                    <lucide.Mail className="text-default-500" size={20} />
                                } />
                            </div>
                            <div className={sty.inputGroup}>
                                <Textarea label="Envie uma mensagem" isRequired maxLength={56} fullWidth />
                            </div>
                            <div className={sty.inputGroup}>
                                <Button type="submit" color="warning" variant="flat" className="w-full">
                                    Entrar em contato
                                </Button>
                            </div>
                        </form>
                    </CardBody>
                </Card>
            </div>


            <div className={sty.container}>
                {list.map((item, index) => (
                    <Tooltip showArrow={true} color={item.color} content={item.title} placement="bottom">
                            <Button className={sty.button} key={index} variant="flat" color={item.color} isIconOnly>
                                <item.icon className="w-24 w-24"/>
                            </Button>
                    </Tooltip>
                ))}
            </div>
            <Footer />
        </>
    );
}
