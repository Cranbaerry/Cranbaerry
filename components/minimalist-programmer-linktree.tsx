'use client'

import { useState, useEffect, ReactNode } from 'react'
import { motion } from 'framer-motion'

export interface LinkItem {
  name: string;
  icon: ReactNode;
  url: string;
}

export interface LinkProps {
  name: string;
  role: string;
  links: LinkItem[];
  pictureUrl: string;
}

export const MinimalistProgrammerLinktree = ({ name, role, links, pictureUrl }: LinkProps) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener('mousemove', updateMousePosition)
        return () => {
            window.removeEventListener('mousemove', updateMousePosition)
        }
    }, [])


    return (
        <div className="min-h-screen flex items-center justify-center bg-black p-4">
            <motion.div
                className="absolute inset-0 z-0"
                animate={{
                    background: [
                        'radial-gradient(circle at 0% 0%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 50%)',
                        'radial-gradient(circle at 100% 100%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 50%)',
                    ],
                }}
                transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
            />
            <motion.div
                className="absolute inset-0 z-10"
                animate={{
                    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 20%)`,
                }}
            />
            <div className="z-20 w-full max-w-md">
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8"
                >
                    <motion.img
                        src={pictureUrl}
                        alt="Profile"
                        className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    />
                    <motion.h1
                        className="text-3xl font-bold text-white mb-2 font-mono"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        {name}
                    </motion.h1>
                    <motion.p
                        className="text-lg text-gray-400 font-mono"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        {role}
                    </motion.p>
                </motion.div>
                <div className="space-y-4">
                    {links.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full p-4 bg-gray-900 bg-opacity-50 backdrop-blur-lg rounded-lg text-white font-mono text-sm transition-all hover:bg-opacity-70"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.1 * index }}
                            whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.1)' }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="flex items-center justify-center">
                                {link.icon}
                                <span className="ml-2">{link.name}</span>
                                <span className="ml-auto text-gray-500">;</span>
                            </span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </div>
    )
}