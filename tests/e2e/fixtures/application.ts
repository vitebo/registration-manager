import type { Locator, Page } from '@playwright/test';

import { DashboardPage } from './dashboard-page';
import { NewRegistrationPage } from './new-registration-page';

export class Application {
  public readonly formPage: NewRegistrationPage;
  public readonly dashboardPage: DashboardPage;

  public readonly notification: Locator;
  public readonly modal: Locator;
  public readonly modalTitle: Locator;

  constructor(public readonly page: Page) {
    this.formPage = new NewRegistrationPage(page);
    this.dashboardPage = new DashboardPage(page);
    this.notification = page.getByRole('alert');
    this.modal = page.getByRole('dialog');
    this.modalTitle = this.modal.getByRole('heading');
  }

  async goTo() {
    await this.page.goto('/');
  }

  isDashboardPage() {
    return this.page.url().endsWith('/dashboard');
  }

  async confirmAction() {
    await this.modal.getByRole('button', { name: 'Confirmar' }).click();
  }
}
