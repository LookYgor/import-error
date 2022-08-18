import ReactDOM from 'react-dom';
import React from 'react';

import ContentExplorer from "box-ui-elements/es/elements/content-explorer";
import { IntlProvider } from "react-intl";
const App = () => {
 return <div>
    <IntlProvider locale="en">
        <ContentExplorer
          contentPreviewProps={{
            contentSidebarProps: {
              detailsSidebarProps: {
                hasProperties: true,
                hasNotices: true,
                hasAccessStats: true,
                hasClassification: true,
                hasRetentionPolicy: true,
              },
              // features: FEATURES,
              hasActivityFeed: true,
              hasMetadata: true,
              hasSkills: true,
              hasVersions: true,
            },
          }}
          // features={FEATURES}
          rootFolderId={"0"}
          token={"edgpdyiRUeEVoT3Qs4IDoaILHDHyKgfh"}
        />
      </IntlProvider>
 </div>;
 }
ReactDOM.render(<App />, document.getElementById('app'));