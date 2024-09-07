'use client';
import { Github, FileText, Linkedin, Mail } from 'lucide-react';
import { MinimalistProgrammerLinktree, LinkItem } from "@/components/minimalist-programmer-linktree";
import profilePicture from "@/app/assets/profile.jpg";
import resumePdf from "@/app/assets/Naufal Hardiansyah Resume.pdf";

export default function Home() {
    const name: string = "Naufal Hardiansyah";
    const role: string = "Full Stack Developer | Open Source Enthusiast"
    const pictureUrl: string = profilePicture.src;

    const links: LinkItem[] = [
        { name: 'GitHub', icon: <Github />, url: 'https://github.com/Cranbaerry' },
        { name: 'LinkedIn', icon: <Linkedin />, url: 'https://www.linkedin.com/in/naufal-h/' },
        { name: 'Résumé', icon: <FileText />, url: resumePdf },
        { name: 'Email', icon: <Mail />, url: 'mailto:naufal@hardiansyah.me' },
    ];

    return <MinimalistProgrammerLinktree name={name} role={role} pictureUrl={pictureUrl} links={links} />;
}
