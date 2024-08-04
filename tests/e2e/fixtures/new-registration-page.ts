import { fakerPT_BR as faker } from '@faker-js/faker';
import type { Page, Locator } from '@playwright/test';
import generateCpf from 'gerar-cpf';

export class NewRegistrationPage {
  public readonly nameInput: Locator;
  public readonly emailInput: Locator;
  public readonly cpfInput: Locator;
  public readonly admissionDateInput: Locator;
  public readonly submitButton: Locator;

  constructor(public readonly page: Page) {
    this.nameInput = this.page.getByPlaceholder('Nome');
    this.emailInput = this.page.getByPlaceholder('Email');
    this.cpfInput = this.page.getByPlaceholder('CPF');
    this.admissionDateInput = this.page.getByLabel('Data de admissão');
    this.submitButton = this.page.getByRole('button', { name: 'Cadastrar' });
  }

  async fillForm({
    employeeName = faker.person.fullName(),
    cpf = generateCpf(),
    email = faker.internet.email(),
    admissionDate = faker.date.recent({ days: 10 })
  } = {}) {
    await this.nameInput.fill(employeeName);
    await this.emailInput.fill(email);
    await this.cpfInput.fill(cpf);
    await this.admissionDateInput.fill(admissionDate.toISOString().split('T')[0]);
    await this.submitButton.click();
  }
}
