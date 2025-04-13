import { Page } from '@playwright/test';

export default class CommonActions {
    private page: Page; // 👈 Declare the property with its type

    constructor(page: Page) {
        this.page = page;
    }

    async navigate(url: string) {
        await this.page.goto(url);
    }

    async click(selector: string) {
        await this.page.click(selector);
    }

    async fill(selector: string, text: string) {
        await this.page.fill(selector, text);
    }

    async getText(selector: string): Promise<string | null> {
        return await this.page.textContent(selector);
    }

    async isChecked(selector: string): Promise<boolean> {
        return await this.page.isChecked(selector);
    }
}
