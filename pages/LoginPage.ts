import { expect, Page } from '@playwright/test';
import CommonActions from '../utils/CommonActions';

export default class LoginPage {
    private actions: CommonActions;
    private usernameSelector: string;

    constructor(page: Page) {
        this.actions = new CommonActions(page);
        this.usernameSelector = '#username';
    }

    async navigate(): Promise<void> {
        await this.actions.navigate('https://the-internet.herokuapp.com/login');
    }

    async login(username: string, password: string): Promise<void> {
        await this.actions.fill(this.usernameSelector, username);
        await this.actions.fill('#password', password);
        await this.actions.click('button[type="submit"]');
    }

    async getErrorMessage(): Promise<string | null> {
        return await this.actions.getText('#flash');
    }

    async assertErrorMessage(expectedMessage: string): Promise<void> {
        const actualMessage = await this.getErrorMessage();
        expect(actualMessage).toContain(expectedMessage);
    }
}
