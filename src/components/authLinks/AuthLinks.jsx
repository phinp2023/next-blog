'use client';
import React, { useState } from 'react';
import styles from './authLinks.module.css';
import Link from 'next/link';

const AuthLinks = () => {
    const [open, setOpen] = useState(false);
    const status = 'noauthenticated';
    return (
        <>
            {status === 'noauthenticated' ? (
                <Link href='/login' className={styles.link}>
                    Login
                </Link>
            ) : (
                <>
                    <Link href='/write'>Write</Link>
                    <span className={styles.link}>Logout</span>
                </>
            )}
            {!open ? (
                <div className={styles.burger} onClick={() => setOpen(true)}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>
            ) : (
                <>
                    <div
                        className={styles.closeMenu}
                        onClick={() => setOpen(false)}
                    ></div>
                    <div className={styles.responsiveMenu}>
                        <Link href='/'>Homepage</Link>
                        <Link href='/'>Contact</Link>
                        <Link href='/'>About</Link>
                        {status === 'noauthenticated' ? (
                            <Link href='/login'>Login</Link>
                        ) : (
                            <>
                                <Link href='/write'>Write</Link>
                                <span>Logout</span>
                            </>
                        )}
                    </div>
                </>
            )}
        </>
    );
};

export default AuthLinks;
