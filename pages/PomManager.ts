import { Page } from '@playwright/test';
import CheckboxesPage from './CheckboxesPage';
import LoginPage from './LoginPage';
import SecurePage from './SecurePage';

export default class PomManager {
    public loginPage: LoginPage;
    public securePage: SecurePage;
    public checkboxesPage: CheckboxesPage;

    constructor(private page: Page) {
        this.loginPage = new LoginPage(page);
        this.securePage = new SecurePage(page);
        this.checkboxesPage = new CheckboxesPage(page);
    }
}
