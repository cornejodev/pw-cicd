import { expect, Page } from '@playwright/test';
import CommonActions from '../utils/CommonActions'; // No .js needed in TS

export default class CheckboxesPage {
    private actions: CommonActions;

    constructor(page: Page) {
        this.actions = new CommonActions(page);
    }

    async navigate(): Promise<void> {
        await this.actions.navigate('https://the-internet.herokuapp.com/checkboxes');
    }

    async checkCheckbox(index: number): Promise<void> {
        await this.actions.click(`input[type="checkbox"]:nth-of-type(${index})`);
    }

    async isItChecked(index: number): Promise<boolean> {
        return await this.actions.isChecked(`input[type="checkbox"]:nth-of-type(${index})`);
    }

    async assertCheckbox(index: number, expectedChecked: boolean): Promise<void> {
        const isChecked = await this.isItChecked(index);
        expect(isChecked).toBe(expectedChecked);
    }
}
