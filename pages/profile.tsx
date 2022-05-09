import { Component } from 'react'
import dynamic from 'next/dynamic'
// import Header from '@components/Header'

const DynamicHeader = dynamic(() => import('@components/Header'), {
  ssr: false,
})

export default class Profile extends Component {
  componentDidMount() {
    console.log(1, this.props)
  }

  componentDidUpdate(nextProps: object) {
    console.log(nextProps)
  }

  componentWillUnmount() {
    console.log(-1)
  }

  render() {
    return (
      <div>
        {/* <Header /> */}
        <DynamicHeader />
        profile
      </div>
    )
  }
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const headers: IncomingHttpHeaders = context.req.headers
//   const browser = headers['user-agent']
//   return {
//     props: {
//       browser,
//     },
//   }
// }
