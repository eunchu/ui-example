import { withErrorBoundary } from '../../../hocs';

import MainPagePresenter from './main-page.presenter';

const MainPage = withErrorBoundary(MainPagePresenter)

export default MainPage;