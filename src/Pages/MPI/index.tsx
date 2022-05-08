import './index.scss'

const MpiPage = () => {
  return (
    <div className="mpi-container">
      <div className="content">
        <p className="music">Quote from “Тоска”</p>
        <h1 className="quote">“Give me the keys, it's time for me to go”</h1>
        <p className="author">Author: Молчат Дома</p>
        <div className="icon-player">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path
              d="M384 128v255.1c0 35.35-28.65 64-64 64H64c-35.35 
              0-64-28.65-64-64V128c0-35.35 28.65-64 64-64H320C355.3 
              64 384 92.65 384 128z"
            />
          </svg>
          <svg
            className="play"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              d="M361 215C375.3 223.8 384 239.3 384 256C384 
              272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 
              482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 
              0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 
              29.64 58.21 29.99 73.03 39.04L361 215z"
            />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M424.1 287c-15.13-15.12-40.1-4.426-40.1 16.97V352H336L153.6 
              108.8C147.6 100.8 138.1 96 128 96H32C14.31 96 0 110.3 0 128s14.31
              32 32 32h80l182.4 243.2C300.4 411.3 309.9 416 320 416h63.97v47.94c0
              21.39 25.86 32.12 40.99 17l79.1-79.98c9.387-9.387 9.387-24.59
              0-33.97L424.1 287zM336 160h47.97v48.03c0 21.39 25.87 32.09 40.1
              16.97l79.1-79.98c9.387-9.391 9.385-24.59-.0013-33.97l-79.1-79.98c-15.13-15.12-40.99-4.391-40.99
              17V96H320c-10.06 0-19.56 4.75-25.59 12.81L254 162.7L293.1 216L336
              160zM112 352H32c-17.69 0-32 14.31-32 32s14.31 32 32 32h96c10.06 0
              19.56-4.75 25.59-12.81l40.4-53.87L154 296L112 352z"
            />
          </svg>
        </div>
        <p className="github">
          Do you want to share a quote? <span>Send it on our GitHub</span>
        </p>
      </div>
    </div>
  )
}

export default MpiPage
