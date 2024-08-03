import { test, expect } from '~~/e2e/fixtures';

test('move registration to approved', async ({ dashboardWithRegistrationInReview: app }) => {
  await app.dashboardPage.approveItem();
  expect(await app.modalTitle.textContent()).toStrictEqual('Aprovar cadastro');
  await app.confirmAction();
  await expect(app.dashboardPage.itemInReview).not.toBeVisible();
  await expect(app.dashboardPage.itemInApproved).toBeVisible();
  await expect(app.notification.getByText('Cadastro aprovado com sucesso!')).toBeVisible();
});

test('move resgistration to reproved', async ({ dashboardWithRegistrationInReview: app }) => {
  await app.dashboardPage.reproveItem();
  expect(await app.modalTitle.textContent()).toStrictEqual('Reprovar cadastro');
  await app.confirmAction();
  await expect(app.dashboardPage.itemInReview).not.toBeVisible();
  await expect(app.dashboardPage.itemInReproved).toBeVisible();
  await expect(app.notification.getByText('Cadastro reprovado com sucesso!')).toBeVisible();
});

test('move the resgistration from approved to review', async ({ dashboardWithRegistrationInApproved: app }) => {
  await app.dashboardPage.reviewItem();
  expect(await app.modalTitle.textContent()).toStrictEqual('Mover cadastro para revisão');
  await app.confirmAction();
  await expect(app.dashboardPage.itemInApproved).not.toBeVisible();
  await expect(app.dashboardPage.itemInReview).toBeVisible();
  await expect(app.notification.getByText('Cadastro movido para revisão com sucesso!')).toBeVisible();
});

test('move the resgistration from reproved to review', async ({ dashboardWithRegistrationInReproved: app }) => {
  await app.dashboardPage.reviewItem();
  expect(await app.modalTitle.textContent()).toStrictEqual('Mover cadastro para revisão');
  await app.confirmAction();
  await expect(app.dashboardPage.itemInReproved).not.toBeVisible();
  await expect(app.dashboardPage.itemInReview).toBeVisible();
  await expect(app.notification.getByText('Cadastro movido para revisão com sucesso!')).toBeVisible();
});

test('delete registration', async ({ dashboardWithRegistrationInReview: app }) => {
  await app.dashboardPage.deleteItem();
  expect(await app.modalTitle.textContent()).toStrictEqual('Excluir cadastro');
  await app.confirmAction();
  await expect(app.dashboardPage.itemInReview).not.toBeVisible();
  await expect(app.dashboardPage.itemInReproved).not.toBeVisible();
  await expect(app.dashboardPage.itemInApproved).not.toBeVisible();
  await expect(app.notification.getByText('Cadastro excluído com sucesso!')).toBeVisible();
});
