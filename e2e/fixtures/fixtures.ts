import { test as base, expect } from '@playwright/test';

import { Application } from './application';

interface Fixtures {
  emptyDashboard: Application;
  dashboardWithRegistrationInReview: Application;
  dashboardWithRegistrationInApproved: Application;
  dashboardWithRegistrationInReproved: Application;
}

export const test = base.extend<Fixtures>({
  emptyDashboard: async ({ page }, use) => {
    const app = new Application(page);
    await app.goTo();
    await use(app);
  },
  dashboardWithRegistrationInReview: async ({ page }, use) => {
    const app = new Application(page);
    await app.goTo();
    await app.dashboardPage.goToNewRegistration();
    await app.formPage.fillForm();
    await app.confirmAction();
    await use(app);
  },
  dashboardWithRegistrationInApproved: async ({ page }, use) => {
    const app = new Application(page);
    await app.goTo();
    await app.dashboardPage.goToNewRegistration();
    await app.formPage.fillForm();
    await app.confirmAction();
    await app.dashboardPage.approveItem();
    await app.confirmAction();
    await use(app);
  },
  dashboardWithRegistrationInReproved: async ({ page }, use) => {
    const app = new Application(page);
    await app.goTo();
    await app.dashboardPage.goToNewRegistration();
    await app.formPage.fillForm();
    await app.confirmAction();
    await app.dashboardPage.approveItem();
    await app.confirmAction();
    await use(app);
  }
});

export { expect };
