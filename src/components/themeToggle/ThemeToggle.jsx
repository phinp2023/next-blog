'use client';

import React, { useContext } from 'react';
import styles from './themeToggle.module.css';
import { ThemeContext } from '@/context/ThemeContext';
import Image from 'next/image';

const ThemeToggle = () => {
    const { theme, toggle } = useContext(ThemeContext);

    return (
        <div
            className={styles.container}
            onClick={toggle}
            style={
                theme === 'light'
                    ? { backgroundColor: '#0f172a' }
                    : { backgroundColor: '#fff' }
            }
        >
            <Image
                src='/moon.png'
                alt='moon'
                width={14}
                height={14}
                className={styles.icon}
            />
            <div
                className={styles.ball}
                style={
                    theme === 'light'
                        ? { right: '1px', backgroundColor: '#fff' }
                        : { left: '1px', backgroundColor: '#0f172a' }
                }
            />
            <Image
                src='/sun.png'
                alt='sun'
                width={14}
                height={14}
                className={styles.icon}
            />
        </div>
    );
};

export default ThemeToggle;
