describe('SignIn Screen Sucess', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('renders componentes successfully', async () => {
    const notLoggedText = await element(by.text('Você não está logado'));

    await expect(notLoggedText).toBeVisible();
  });

  it('change text to github user name when user clicks on SignIn button', async () => {
    const notLoggedText = await element(by.text('Você não está logado'));
    const signInButton = await element(by.text('Entrar'));

    await signInButton.tap();

    const userNameText = await element(by.text('Carlos Levir'));

    await expect(notLoggedText).not.toBeVisible();
    await expect(userNameText).toBeVisible();
  });

  // it('should have welcome screen', async () => {
  //   await expect(element(by.id('welcome'))).toBeVisible();
  // });

  // it('should show hello screen after tap', async () => {
  //   await element(by.id('hello_button')).tap();
  //   await expect(element(by.text('Hello!!!'))).toBeVisible();
  // });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
