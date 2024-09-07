import { Github, FileText, Linkedin, Mail } from 'lucide-react';
import { MinimalistProgrammerLinktree, LinkItem } from "@/components/minimalist-programmer-linktree";
export default function Home() {
    const name = "Naufal Hardiansyah";
    const role = "Full Stack Developer | ML Enthusiast";
    const pictureUrl = '/assets/profile.jpg';
    const resumePdf = '/assets/Naufal Hardiansyah Resume.pdf';

    const links: LinkItem[] = [
        { name: 'GitHub', icon: <Github />, url: 'https://github.com/Cranbaerry' },
        { name: 'LinkedIn', icon: <Linkedin />, url: 'https://www.linkedin.com/in/naufal-h/' },
        { name: 'Email', icon: <Mail />, url: 'mailto:naufal@hardiansyah.me' },
        { name: 'Resume', icon: <FileText />, url: resumePdf },
    ];

    return <MinimalistProgrammerLinktree name={name} role={role} pictureUrl={pictureUrl} links={links} />;
}
