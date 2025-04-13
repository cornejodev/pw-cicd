import { expect, Page } from '@playwright/test';
import CommonActions from '../utils/CommonActions';

export default class SecurePage {
    private actions: CommonActions;

    constructor(page: Page) {
        this.actions = new CommonActions(page);
    }

    async getMessage(): Promise<string | null> {
        return await this.actions.getText('#flash');
    }

    async assertLoggedInMessage(expectedMessage: string): Promise<void> {
        const message = await this.getMessage();
        expect(message).toContain(expectedMessage);
    }
}
