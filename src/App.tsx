import { Post } from './componentes/Post'
import { Header } from './componentes/Header.tsx'
import { Sidebar } from './componentes/Sidebar.tsx'

import  styles  from './App.module.css'

export function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
          />
          <Post
          />
        </main>
      </div>
    </>
  )
}