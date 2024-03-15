import { ProgressBar } from "../pages/progressBar";
const progress = new ProgressBar()
describe('Progress Bar Automation', () => {
    beforeEach(() => {
      cy.visit('/progressbar')
      cy.viewport(414, 896);
    });
    it('User progress Bar', () => {
      progress.startProgressBar()
      progress.stopProgressBarAt75Percent()
    })
})
  