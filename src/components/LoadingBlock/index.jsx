import React from 'react'
import ContentLoader from 'react-content-loader'

export const LoadingBlock = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={457}
    viewBox='0 0 280 457'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    className='loading-block'
  >
    <rect x='0' y='268' rx='6' ry='6' width='272' height='30' />
    <circle cx='136' cy='125' r='125' />
    <rect x='1' y='320' rx='6' ry='6' width='272' height='80' />
    <rect x='1' y='416' rx='6' ry='6' width='76' height='33' />
    <rect x='146' y='409' rx='24' ry='24' width='128' height='48' />
  </ContentLoader>
)

