import React from 'react';
import styles from './card.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image className={styles.image} src='/p1.jpeg' alt='' fill />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.02.2023 - </span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href='/'>
                    <h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h1>
                </Link>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aspernatur illum obcaecati delectus excepturi animi saepe
                    dolorum officiis, quas labore porro molestias vel, rem autem
                    facilis laudantium dolores, numquam explicabo ipsam.
                </p>
                <Link className={styles.link} href='/'>
                    Read more
                </Link>
            </div>
        </div>
    );
};

export default Card;
