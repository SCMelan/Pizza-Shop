import React from 'react'
import styles from './ErrorPageBlock.module.scss'

export const ErrorPageBlock:React.FC = () => {
  return (
    <div className={styles.root}>
        <h1>
            <span>😕</span>
            <br/>
            Ничего не найдено :(
        </h1>
        <p className={styles.description}>Данная страница отсутствует в данном магазине</p>
    </div>
  )
}
