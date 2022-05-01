import LeftWave from '../../Assets/images/wave1.svg'
import RightWave from '../../Assets/images/wave2.svg'
import MusicSvg from '../../Assets/images/music.svg'
import Menu from '../../Components/Molecules/Menu'

import './index.scss'

function HomePage() {
  return (
    <div className="index-container">
      <Menu />
      <div className="content">
        <div className="text-container">
          <h1>Simplified quotes from your favorites artists</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            tristique urna. Nulla facilisi. Aliquam et sollicitudin risus, ut
            vulputate lacus. Cras suscipit sagittis hendrerit. Sed ultrices
            facilisis orci, nec scelerisque neque tincidunt nec. Fusce felis
            metus, placerat quis eros non, maximus elementum mi.
          </p>
        </div>

        <img src={MusicSvg} />
      </div>

      <img className="left-wave" src={LeftWave} />
      <img className="right-wave" src={RightWave} />
    </div>
  )
}

export default HomePage
