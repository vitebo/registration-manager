import { test, expect } from '~~/e2e/fixtures';

test('create registration', async ({ emptyDashboard: app }) => {
  await app.dashboardPage.goToNewRegistration();
  await app.formPage.fillForm({
    employeeName: 'John Doe'
  });
  expect(await app.modalTitle.textContent()).toStrictEqual('Criar cadastro');
  await app.confirmAction();
  expect(app.isDashboardPage()).toBe(true);
  await expect(app.dashboardPage.itemInReview.getByRole('heading', { name: 'John Doe' })).toBeVisible();
  await expect(app.notification.getByText('Cadastro criado com sucesso!')).toBeVisible();
});

test('create registration with invalid data', async ({ emptyDashboard: app }) => {
  await app.dashboardPage.goToNewRegistration();
  await app.formPage.fillForm({
    cpf: '12345678900'
  });
  expect(app.isDashboardPage()).toBe(false);
  await expect(app.page.getByText('Formato de cpf inválido')).toBeVisible();
  await expect(app.modal).not.toBeVisible();
});
