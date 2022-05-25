import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Center } from '@mantine/core'
import { Layout } from '../components/Layout'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <Center>
      <div className='flex min-h-screen  flex-col justify-center p-4'>
        <div className='mb-10'>
          <Link href='/button'>
            <a className='mr-8 rounded  bg-indigo-500 px-4 py-12 text-white hover:bg-indigo-600'>
              Button Demo
            </a>
          </Link>
          <Link href='/group'>
            <a className='ml-8 rounded bg-gray-500 px-4 py-12 text-white hover:bg-gray-600'>
              Group Demo
            </a>
          </Link>
        </div>
      </div>
    </Center>
  )
}

export default Home
