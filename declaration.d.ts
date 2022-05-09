declare module 'ts-react-aliplayer' {
  interface PlayerProps {
    url: string
    // options: object
    events: object
  }

  const DynamicPlayer: React.FC<PlayerProps>

  export = DynamicPlayer
}
