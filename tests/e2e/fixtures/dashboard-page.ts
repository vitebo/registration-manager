import type { Page, Locator } from '@playwright/test';

export class DashboardPage {
  public readonly newRegistrationButton: Locator;
  public readonly reviewList: Locator;
  public readonly itemInReview: Locator;
  public readonly approvedList: Locator;
  public readonly itemInApproved: Locator;
  public readonly reprovedList: Locator;
  public readonly itemInReproved: Locator;
  public readonly removeButton: Locator;
  public readonly cpfInput: Locator;

  constructor(public readonly page: Page) {
    this.newRegistrationButton = this.page.getByRole('button', { name: 'Nova Admissão' });
    this.reviewList = this.page.locator('[aria-labelledby="registrations-in-review"]');
    this.itemInReview = this.reviewList.getByRole('listitem');
    this.approvedList = this.page.locator('[aria-labelledby="registrations-approved"]');
    this.itemInApproved = this.approvedList.getByRole('listitem');
    this.reprovedList = this.page.locator('[aria-labelledby="registrations-reproved"]');
    this.itemInReproved = this.reprovedList.getByRole('listitem');
    this.removeButton = this.page.locator('button[aria-labelledby="remove-registration"]');
    this.cpfInput = this.page.getByPlaceholder('Digite um CPF válido');
  }

  async approveItem() {
    await this.page.getByRole('button', { name: 'Aprovar' }).click();
  }

  async reproveItem() {
    await this.page.getByRole('button', { name: 'Reprovar' }).click();
  }

  async reviewItem() {
    await this.page.getByRole('button', { name: 'Revisar' }).click();
  }

  async deleteItem() {
    await this.removeButton.click();
  }

  async fillCpf(cpf: string) {
    await this.cpfInput.fill(cpf);
  }

  async goToNewRegistration() {
    await this.newRegistrationButton.click();
  }
}
