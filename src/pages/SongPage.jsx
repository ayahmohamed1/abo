import { motion } from 'framer-motion'
import { useState } from 'react'
import styles from './SongPage.module.css'

function VinylSVG() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="38" fill="#1a1a1a" stroke="#333" strokeWidth="1.5"/>
      <circle cx="40" cy="40" r="28" fill="#111" stroke="#2a2a2a" strokeWidth="1"/>
      <circle cx="40" cy="40" r="18" fill="#1a1a1a" stroke="#222" strokeWidth="1"/>
      <circle cx="40" cy="40" r="5" fill="#c0392b"/>
      <circle cx="40" cy="40" r="2" fill="#fff" opacity="0.6"/>
      {[8,14,20,26].map((r, i) => (
        <circle key={i} cx="40" cy="40" r={r} fill="none" stroke="#2a2a2a" strokeWidth="0.5"/>
      ))}
    </svg>
  )
}

export default function SongPage({ back, content }) {
  const s = content.song
  const [showInfo, setShowInfo] = useState(false)

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.dashedTop} />

        <div className={styles.content}>
          <p className={styles.remindsText} dir="auto">{s.remindsText}</p>

          <div className={styles.embedWrap}>
            <motion.div
              className={styles.vinyl}
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            >
              <VinylSVG />
            </motion.div>

            <button className={styles.toggleBtn} onClick={() => setShowInfo(!showInfo)}>
              {showInfo ? "إخفاء التفاصيل" : "عرض بيانات الأغنية"}
            </button>
          </div>

          {showInfo && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }}
              style={{ width: '100%' }}
            >
              <div className={styles.songInfo}>
                <span className={styles.songTitle} dir="auto">{s.songTitle}</span>
                <span className={styles.artist} dir="auto">{s.artist}</span>
              </div>
              <p className={styles.highlight} dir="auto">{s.highlight}</p>
            </motion.div>
          )}

          <audio
            controls
            src={s.audioSrc}
            className={styles.audioPlayer}
          >
            Your browser does not support the audio element.
          </audio>
        </div>

        <div className={styles.dashedBottom} />

        <motion.div
          className={styles.footer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className={styles.title} dir="auto">{s.title}</h2>
          <button className="btn-return" onClick={back}>{s.returnButton}</button>
        </motion.div>
      </div>
    </div>
  )
}