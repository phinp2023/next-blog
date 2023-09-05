import React from 'react';
import styles from './featured.module.css';
import Image from 'next/image';

const Featured = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <b>Hey, kaito dev here!</b> Discover by stories and creative
                ideas
            </div>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image className={styles.img} src='/p1.jpeg' alt='' fill />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                    </h1>
                    <p className={styles.postDesc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Natus cum amet adipisci accusamus delectus. Quaerat sunt
                        itaque, veniam vel ratione aut! Repudiandae quae unde
                        placeat ut quaerat necessitatibus laudantium recusandae.
                    </p>
                    <button className={styles.button}>Read more</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
