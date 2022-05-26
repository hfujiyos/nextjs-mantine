import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Center, Group } from '@mantine/core'
import { Layout } from '../components/Layout'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <Center>
      <div className='flex min-h-screen  justify-center'>
        <Group my='md' grow>
          <Link href='/button'>
            <a className='rounded  bg-gray-500 px-4 py-8 text-white hover:bg-gray-600'>
              Button Demo
            </a>
          </Link>
          <Link href='/group'>
            <a className='rounded bg-gray-500 px-4 py-8 text-white hover:bg-gray-600'>
              Group Demo
            </a>
          </Link>
          <Link href='/grid'>
            <a className='rounded  bg-gray-500 px-4 py-8 text-white hover:bg-gray-600'>
              Grid Demo
            </a>
          </Link>
        </Group>
      </div>
    </Center>
  )
}

export default Home
