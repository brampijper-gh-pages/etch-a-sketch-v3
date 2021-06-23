import React from 'react'
import * as styles from './css/header.module.css'
import Logo from "../images/logo.svg"
import Button from './Button'

const Header = () => {

    return (
        <section className={styles.page} id="header">
                <Logo />
                <div className={styles.textContainer}>
                    <article>
                        <h1>Etch a Sketch V3</h1>
                        <p>Move your mouse and start create art.</p>
                        <p>Everything you create is unique.</p>
                    </article>
                </div>
                <Button text="create now" />
        </section>
    )
}

export default Header