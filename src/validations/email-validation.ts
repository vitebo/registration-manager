import {
    Email,
    EmailFormatError,
    EmailEmptyError
} from '~/entities/email'

export class EmailValidation {
    static validate(value: string): string | undefined {
        try {
            new Email(value)
        } catch (error) {
            if (error instanceof EmailEmptyError) {
                return 'Email não pode ser vazio'
            }
            if (error instanceof EmailFormatError) {
                return 'Formato de e-mail inválido'
            }
            return 'E-mail inválido'
        }
    }
}