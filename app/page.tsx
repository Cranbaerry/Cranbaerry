import { Github, MessageCircle, FileText, Linkedin, Mail } from 'lucide-react';
import { MinimalistProgrammerLinktree, LinkItem } from "@/components/minimalist-programmer-linktree";
export default function Home() {
    const name = "Naufal Hardiansyah";
    const role = "Full Stack Developer | ML Enthusiast";
    const pictureUrl = '/assets/profile.jpg';
    const resumePdf = '/assets/Naufal Hardiansyah Resume.pdf';

    const links: LinkItem[] = [
        { name: 'Resume', icon: <FileText />, url: resumePdf },
        { name: 'LinkedIn', icon: <Linkedin />, url: 'https://www.linkedin.com/in/naufal-h/' },
        { name: 'GitHub', icon: <Github />, url: 'https://github.com/Cranbaerry' },
        { name: 'WhatsApp', icon: <MessageCircle />, url: 'https://wa.me/6287766250158' },
        { name: 'Email', icon: <Mail />, url: 'mailto:naufal@hardiansyah.me' },
    ];

    return <MinimalistProgrammerLinktree name={name} role={role} pictureUrl={pictureUrl} links={links} />;
}
