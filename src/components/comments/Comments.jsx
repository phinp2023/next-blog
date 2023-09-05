import React from 'react';
import styles from './comments.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Comments = () => {
    const status = 'authenticated';
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {status === 'authenticated' ? (
                <div className={styles.write}>
                    <textarea
                        className={styles.input}
                        placeholder='write a comment'
                    />
                    <button className={styles.button}>Send</button>
                </div>
            ) : (
                <Link href='/login'>Login to write a comment</Link>
            )}
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image
                            src='/p1.jpeg'
                            alt=''
                            width={50}
                            height={50}
                            className={styles.image}
                        />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>01.01.2023</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Enim, quasi totam pariatur, rerum laudantium sint
                        deleniti in ad vero dignissimos eos corrupti, aliquid
                        rem culpa id provident impedit repudiandae nisi.
                    </p>
                </div>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image
                            src='/p1.jpeg'
                            alt=''
                            width={50}
                            height={50}
                            className={styles.image}
                        />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>01.01.2023</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Enim, quasi totam pariatur, rerum laudantium sint
                        deleniti in ad vero dignissimos eos corrupti, aliquid
                        rem culpa id provident impedit repudiandae nisi.
                    </p>
                </div>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image
                            src='/p1.jpeg'
                            alt=''
                            width={50}
                            height={50}
                            className={styles.image}
                        />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>01.01.2023</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Enim, quasi totam pariatur, rerum laudantium sint
                        deleniti in ad vero dignissimos eos corrupti, aliquid
                        rem culpa id provident impedit repudiandae nisi.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Comments;
