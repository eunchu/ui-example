import { withErrorBoundary } from '../../../hocs';

import LibraryListPresenter from './library-list.presenter';

const LibraryList = withErrorBoundary(LibraryListPresenter)

export default LibraryList;