import { useEffect } from 'react'

// import Header from '@components/Header'
// import Player from 'ts-react-aliplayer'
// import ClientSideOnlyRenderer from '@components/ClientSideOnlyRenderer'

// const js = require('ts-react-aliplayer/dist/lib/aliplayercomponents-1.0.8.min.js')

// const DynamicHeader = dynamic(import('@components/Header'), {
//   ssr: false,
// })

// interface PlayerProps {
//   url: string
//   options: object
//   events: object
// }

import dynamic from 'next/dynamic'
const DynamicPlayer = dynamic(import('ts-react-aliplayer'), {
  ssr: false,
})

const a = '1'

export default function Video(props: object) {
  // const { msg } = props
  // console.log(window)
  // console.log(isServer, typeof window == 'undefined')

  // const renderDone = () => <Player url={'dasdsa'} />

  // const renderLoading = () => {}

  useEffect(() => {
    console.log(a)
  }, [])

  return (
    <div>
      {/* <DynamicHeader /> */}
      {/* <Header /> */}
      {/* <ClientSideOnlyRenderer
        initialSsrDone={isServer}
        renderDone={renderDone}
        renderLoading={renderLoading}
      /> */}
      {/* <Player url={'dasdsa'} /> */}
      <DynamicPlayer
        url="https://player.alicdn.com/video/editor.mp4"
        // options={} // 对应对应属性设置，参考aliplayer文档
        events={{
          ready: () => console.log('created'),
          startPlay: () => console.log('startPlay'),
          pausePlay: () => console.log('pausePlay'),
          timeUpdate: () => console.log('timeUpdate'),
          ended: () => console.log('ended'),
          onError: () => console.log('onError'),
          onRequestFullscreen: () => console.log('onRequestFullscreen'),
          onCancelFullscreen: () => console.log('onCancelFullscreen'),
          getLastTime: () => console.log('getLastTime'),
        }}
      />
      <p>测试播放器</p>
      {/* <p>{msg}</p> */}
    </div>
  )
}

// Video.getInitialProps = (req) => {
//   // console.log(req)

//   return {
//     msg: 'dasdas',
//   }
// }

// export function getServerSideProps(context) {
//   // console.log(context)
//   return {
//     props: {
//       // context: context,
//       isServer: 'dasd',
//     },
//   }
// }
