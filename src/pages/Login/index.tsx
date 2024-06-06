import { Button } from '@/components/Button'
import { Form } from '@/components/Form'
import { Input } from '@/components/Input'
import { InputPassword } from '@/components/Input/InputPassword'
import { useAuth } from '@/contexts/AuthProvider/useAuth'
import { LoginForm, LoginSchema } from '@/data/schemas/Login'

import {
  CardContainer,
  Container,
  CardTitle,
  CardDescription,
  ButtonContainer,
  SectionForm,
  Logo,
} from './styled'

export function Login() {
  const { signIn, isLoadingSignIn } = useAuth()

  const handleSignInSubmit = (data: LoginForm) => {
    signIn(data)
  }

  return (
    <Container>
      <CardContainer>
        <Logo src="/assets/images/logo-lg.png" alt="Logo" />
        <CardTitle>Acessar a plataforma</CardTitle>
        <CardDescription>
          Encontre as melhores condições para suas viagens corporativas
        </CardDescription>

        <Form schema={LoginSchema} onSubmit={handleSignInSubmit}>
          {({ register, formState: { errors } }) => (
            <SectionForm>
              <Input label="E-mail" {...register('email')}>
                <Input.Error message={errors.email?.message} />
              </Input>
              <InputPassword label="Senha" {...register('password')}>
                <Input.Error message={errors.password?.message} />
              </InputPassword>
              <ButtonContainer>
                <Button type="submit" disabled={isLoadingSignIn}>
                  Acessar
                </Button>
              </ButtonContainer>
            </SectionForm>
          )}
        </Form>
      </CardContainer>
    </Container>
  )
}
