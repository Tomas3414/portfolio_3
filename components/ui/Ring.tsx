import { motion } from "framer-motion";


export default function Ring() {

  return (
    <section className={`myContainer justify-center items-center min-h-screen -z-30`}>
      {ring.map((curr, index) => {
        return (
          <motion.div
            key={index}
            initial={{ y: `${-(curr.size + 100)}vh`, x: `${curr.size + 100}vw`, opacity: 0 }}
            animate={{ y: '50vh', x: '-100vw', rotate: curr.rotate, opacity: 1 }}
            className={`fixed -z-20 top-0 right-0 bottom-0 flex justify-center items-center bg-transparent`}
            style={{ height: `${curr.size}vh`, width: `${curr.size}vh` }}
            transition={{ repeat: Infinity, type: 'keyframes', duration: curr.duration, delay: curr.delay }}
          >
            <span className='absolute top-2 h-4 w-4 rounded-full dark:opacity-100 opacity-50' style={{ backgroundColor: `${curr.color}`, boxShadow: `0px 0px 35px ${curr.color}` }} />
            <span className='absolute left-2 h-2 w-4 rounded-full dark:opacity-100 opacity-50' style={{ backgroundColor: `${curr.color}`, boxShadow: `0px 0px 35px ${curr.color}` }} />
            <span className='absolute right-2 h-4 w-2 rounded-full dark:opacity-100 opacity-50' style={{ backgroundColor: `${curr.color}`, boxShadow: `0px 0px 35px ${curr.color}` }} />
            <span className='absolute bottom-2 h-2 w-2 rounded-full dark:opacity-100 opacity-50' style={{ backgroundColor: `${curr.color}`, boxShadow: `0px 0px 35px ${curr.color}` }} />
          </motion.div>
        )
      })}
    </section>
  )
}

const ring = [
  { rotate: 360, size: 100, duration: 5, delay: .8, color: '#0ea5e9', },
  { rotate: 360, size: 86, duration: 4, delay: 1, color: '#f97316', },
  { rotate: 360, size: 72, duration: 6, delay: .6, color: '#22c55e', },
  { rotate: 360, size: 60, duration: 4, delay: 1.2, color: '#3b82f6', },
  { rotate: 360, size: 50, duration: 5, delay: .4, color: '#6366f1', },
  { rotate: 360, size: 69, duration: 3, delay: 1.2, color: '#10b981' },
  { rotate: 360, size: 59, duration: 5, delay: .2, color: '#0ea5e9', },
  { rotate: 360, size: 72, duration: 4, delay: 1.4, color: '#e879f9' },
  { rotate: -360, size: 92, duration: 6, delay: 0, color: '#ef4444', },
  { rotate: -360, size: 79, duration: 4, delay: 1.4, color: '#eab308', },
  { rotate: -360, size: 66, duration: 4, delay: .2, color: '#14b8a6', },
  { rotate: -360, size: 66, duration: 5, delay: 1.2, color: '#ec4899', },
  { rotate: -360, size: 54, duration: 3, delay: .4, color: '#64748b', },
  { rotate: -360, size: 49, duration: 5, delay: .4, color: '#0ea5e9', },
  { rotate: -360, size: 60, duration: 4, delay: .6, color: '#6b7280' },
  { rotate: -360, size: 55, duration: 6, delay: 1, color: '#fbbf' },
]