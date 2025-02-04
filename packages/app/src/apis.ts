import {
  ScmIntegrationsApi,
  scmIntegrationsApiRef,
  ScmAuth,
} from '@backstage/integration-react';
import {
  AnyApiFactory,
  configApiRef,
  createApiFactory,
} from '@backstage/core-plugin-api';

export const apis: AnyApiFactory[] = [
  createApiFactory({
    api: scmIntegrationsApiRef,
    deps: { configApi: configApiRef },
    factory: ({ configApi }) => ScmIntegrationsApi.fromConfig(configApi),
  }),
  ScmAuth.createDefaultApiFactory(),
];

//argo
import { argocdPlugin, ArgoCDPage } from '@roadiehq/backstage-plugin-argo-cd';
<Route path="/argocd" element={<ArgoCDPage />} />;
import ArgoIcon from '@material-ui/icons/Cloud';
<SidebarItem icon={ArgoIcon} to="/argocd" text="ArgoCD" />;
