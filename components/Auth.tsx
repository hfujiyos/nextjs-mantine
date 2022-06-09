import { useState } from 'react'
import * as Yup from 'yup'  //ﾊﾞﾘﾃﾞｰｼｮﾝﾗｲﾌﾞﾗﾘ
import { ShieldCheckIcon } from '@heroicons/react/solid'
import { ExclamationCircleIcon } from '@heroicons/react/outline'
import { useForm, yupResolver } from '@mantine/form'
import {
  Anchor,
  NumberInput,
  TextInput,
  Button,
  Group,
  PasswordInput,
  Alert,
} from '@mantine/core'
import { supabase } from '../utils/supabase'
import { Layout } from '../components/Layout'
import { Form } from '../types'

/**
 * Yupﾊﾞﾘﾃﾞｰｼｮﾝｽｷｰﾏ
 * @description email/password/ageに制約付与
 */
const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('emailを設定ください'),
  password: Yup.string()
    .required('パスワードを設定ください')
    .min(8, 'パスワードは8文字以上とする必要があります')
    .matches(/[a-z]+/, '小文字を1文字以上含める必要があります')
    .matches(/[A-Z]+/, '大文字を1文字以上含める必要があります')
    .matches(/[@$!%*#?&]+/, '記号を1文字以上含める必要があります'),
  age: Yup.number().min(15, '新規アカウントには15歳以上である必要があります'),
})

/**
 * Auth認証ｺﾝﾎﾟｰﾈﾝﾄ
 * @returns Auth認証ﾋﾞｭｰ
 */
export const Auth = () => {
  const [isRegister, setIsRegister] = useState(false)
  const [error, setError] = useState('')
  const form = useForm<Form>({
    schema: yupResolver(schema),
    initialValues: {
      email: '',
      password: '',
      age: 15,
    },
  })

  /**
   * handleSubmit認証関数
   * @description ﾚｼﾞｽﾀｰﾓｰﾄﾞでﾕｰｻﾞｰ登録、ﾛｸﾞｲﾝﾓｰﾄﾞでﾕｰｻﾞｰ認証
   */
  const handleSubmit = async () => {
    if (isRegister) {
      // ﾚｼﾞｽﾀｰﾓｰﾄﾞ（supabaseﾕｰｻﾞｰ登録）
      const { error } = await supabase.auth.signUp({
        email: form.values.email,
        password: form.values.password,
      })
      if (error) {
        setError(error.message)
      }
      form.reset()
    } else {
      // ﾛｸﾞｲﾝﾓｰﾄﾞ（supabaseﾕｰｻﾞｰ認証）
      const { error } = await supabase.auth.signIn({
        email: form.values.email,
        password: form.values.password,
      })
      if (error) {
        setError(error.message)
      }
      form.reset()
    }
  }

  // Auth認証ﾋﾞｭｰ
  return (
    <Layout title="Auth">
      <Group direction="column" position="center">
        <ShieldCheckIcon className="h-16 w-16 text-blue-500" />
        {error && (
          <Alert
            mt="md"
            icon={<ExclamationCircleIcon className="text-pink-500" />}
            title="Authorization Error"
            color="red"
            radius="md"
          >
            {error}
          </Alert>
        )}
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            mt="md"
            id="email"
            label="Email*"
            placeholder="example@gmail.com"
            {...form.getInputProps('email')}
          />
          <PasswordInput
            mt="md"
            id="password"
            placeholder="password"
            label="Password*"
            description="大文字+小文字+記号を1つ以上ずつ含める必要があります"
            {...form.getInputProps('password')}
          />
          {isRegister && (
            <NumberInput
              mt="md"
              id="age"
              label="Age"
              placeholder="Your age"
              {...form.getInputProps('age')}
            />
          )}
          <Group mt="lg" position="apart">
            <Anchor
              component="button"
              type="button"
              color="gray"
              onClick={() => {
                setIsRegister(!isRegister)
                setError('')
              }}
              size="sm"
            >
              {isRegister
                ? 'アカウントをお持ですか？ログインください'
                : "アカウントをお持ちではありませんか？ アカウント登録ください"}
            </Anchor>
            <Button type="submit">{isRegister ? 'Register' : 'Login'}</Button>
          </Group>
        </form>
      </Group>
    </Layout>
  )
}