'use client';
import React, { useState } from 'react';
import styles from './authLinks.module.css';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

const AuthLinks = () => {
    const [open, setOpen] = useState(false);
    const { status } = useSession();

    return (
        <>
            {status === 'unauthenticated' ? (
                <Link href='/login' className={styles.link}>
                    Login
                </Link>
            ) : (
                <>
                    <Link href='/write'>Write</Link>
                    <span className={styles.link} onClick={signOut}>
                        Logout
                    </span>
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
                                <span onClick={signOut}>Logout</span>
                            </>
                        )}
                    </div>
                </>
            )}
        </>
    );
};

export default AuthLinks;
