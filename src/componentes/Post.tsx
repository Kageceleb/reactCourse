import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/kageceleb.png" />
                    <div className={styles.authorInfo}>
                        <strong>Samuel Sant'Anna</strong>
                        <span>WebDev</span>
                    </div>
                </div>
                <time title='11 de Maio de 2024' dateTime='2024-05-11 08:12:45'>Publicado à 1 h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
                <p>👉<a href="">jane.design/doctorcare</a></p>
                <p><a href="">#novoprojeto</a> <a href="">#nlw</a> <a href="">#rocketseat</a></p>
                </p>
            </div>
        </article>
    )
}