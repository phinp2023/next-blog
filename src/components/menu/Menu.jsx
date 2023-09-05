import React from 'react';
import styles from './menu.module.css';
import Link from 'next/link';
import Image from 'next/image';
import MenuPosts from '../menuPosts/MenuPosts';
import MenuCategories from '../menuCategories/MenuCategories';

const Menu = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h2 className={styles.subTitle}>{"What's hot"}</h2>
                <h1 className={styles.title}>Most popular</h1>
                <MenuPosts withImage={false} />
            </div>
            <div className={styles.wrapper}>
                <h2 className={styles.subTitle}>Discover by topic</h2>
                <h1 className={styles.title}>Categories</h1>
                <MenuCategories />
            </div>
            <div className={styles.wrapper}>
                <h2 className={styles.subTitle}>Chosen by the editor</h2>
                <h1 className={styles.title}>Editors Pick</h1>
                <MenuPosts withImage={true} />
            </div>
        </div>
    );
};

export default Menu;
