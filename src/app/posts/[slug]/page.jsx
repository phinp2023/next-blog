import React from 'react';
import styles from './singlePage.module.css';
import Image from 'next/image';
import Comments from '@/components/comments/Comments';

const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image
                                className={styles.image}
                                src='/p1.jpeg'
                                alt=''
                                fill
                            />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>01.01.2024</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        className={styles.image}
                        src='/p1.jpeg'
                        alt=''
                        fill
                    />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Rem hic eligendi non odit neque recusandae
                            vitae quasi itaque! Commodi omnis quae sed
                            dignissimos aliquam molestiae iste nemo, nostrum
                            error corporis.
                        </p>
                    </div>
                    <Comments />
                </div>
            </div>
        </div>
    );
};

export default SinglePage;
