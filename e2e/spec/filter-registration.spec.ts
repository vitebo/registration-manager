import { test, expect } from '~~/e2e/fixtures';

test('filter registration by cpf', async ({ dashboardWithRegistrationInReview: app }) => {
  await app.dashboardPage.goToNewRegistration();
  const data = {
    employeeName: 'John Doe',
    cpf: '98377420031'
  };
  await app.formPage.fillForm(data);
  await app.confirmAction();
  expect(await app.dashboardPage.itemInReview.count()).toStrictEqual(2);
  await app.dashboardPage.fillCpf(data.cpf);
  expect(await app.dashboardPage.itemInReview.count()).toStrictEqual(1);
  expect(await app.dashboardPage.itemInReview.textContent()).toContain(data.employeeName);
});

test('dont filter registration when cpf is invalid', async ({ dashboardWithRegistrationInReview: app }) => {
  expect(await app.dashboardPage.itemInReview.count()).toStrictEqual(1);
  await app.dashboardPage.fillCpf('12345678901');
  expect(await app.dashboardPage.itemInReview.count()).toStrictEqual(1);
  await expect(app.page.getByText('Formato de cpf inválido')).toBeVisible();
});

test('show all registrations when cpf is empty', async ({ dashboardWithRegistrationInReview: app }) => {
  await app.dashboardPage.goToNewRegistration();
  const data = {
    employeeName: 'John Doe',
    cpf: '98377420031'
  };
  await app.formPage.fillForm(data);
  await app.confirmAction();
  expect(await app.dashboardPage.itemInReview.count()).toStrictEqual(2);
  await app.dashboardPage.fillCpf(data.cpf);
  expect(await app.dashboardPage.itemInReview.count()).toStrictEqual(1);
  await app.dashboardPage.fillCpf('');
  expect(await app.dashboardPage.itemInReview.count()).toStrictEqual(2);
});
