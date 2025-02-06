/*
 * Hi!
 *
 * Note that this is an EXAMPLE Backstage backend. Please check the README.
 *
 * Happy hacking!
 */

import { createBackend } from '@backstage/backend-defaults';

const backend = createBackend();

backend.add(import('@backstage/plugin-app-backend'));
backend.add(import('@backstage/plugin-proxy-backend'));
backend.add(import('@backstage/plugin-scaffolder-backend'));
backend.add(import('@backstage/plugin-scaffolder-backend-module-github'));
backend.add(import('@backstage/plugin-techdocs-backend'));

// auth plugin
backend.add(import('@backstage/plugin-auth-backend'));
// See https://backstage.io/docs/backend-system/building-backends/migrating#the-auth-plugin
backend.add(import('@backstage/plugin-auth-backend-module-guest-provider'));
// See https://backstage.io/docs/auth/guest/provider

// catalog plugin
backend.add(import('@backstage/plugin-catalog-backend'));
backend.add(
  import('@backstage/plugin-catalog-backend-module-scaffolder-entity-model'),
);

// See https://backstage.io/docs/features/software-catalog/configuration#subscribing-to-catalog-errors
backend.add(import('@backstage/plugin-catalog-backend-module-logs'));

// permission plugin
backend.add(import('@backstage/plugin-permission-backend'));
// See https://backstage.io/docs/permissions/getting-started for how to create your own permission policy
backend.add(
  import('@backstage/plugin-permission-backend-module-allow-all-policy'),
);

// search plugin
backend.add(import('@backstage/plugin-search-backend'));

// search engine
// See https://backstage.io/docs/features/search/search-engines
backend.add(import('@backstage/plugin-search-backend-module-pg'));

// search collators
backend.add(import('@backstage/plugin-search-backend-module-catalog'));
backend.add(import('@backstage/plugin-search-backend-module-techdocs'));

// kubernetes
backend.add(import('@backstage/plugin-kubernetes-backend'));
//======================
// import kubernetes from './plugins/kubernetes';
// import { useHotMemoize } from '@backstage/backend-common';
// import { DefaultEnvironment } from '@backstage/backend-common';
// const kubernetesEnv = useHotMemoize(module, () => DefaultEnvironment.create());
// apiRouter.use('/kubernetes', await kubernetes(kubernetesEnv));
// async function main() {
//   const kubernetesEnv = await kubernetes(kubernetesEnv);
//   apiRouter.use('/kubernetes', kubernetesEnv);
// }  
//
// import kubernetes from './plugins/kubernetes';
// const kubernetesEnv = useHotMemoize(module, () => createEnv('kubernetes'));
// apiRouter.use('/kubernetes', await kubernetes(kubernetesEnv));
//======================
async function main() {
  const backend = createBackend(); 
  const kubernetesEnv = await kubernetes(); 
  backend.add(kubernetesEnv); 
  await backend.start();
}
//======================
backend.start();

//harbor
import harbor from './plugins/harbor';
async function main() {
  // tip: add the route to the apiRouter before the apiRouter is added to the service to ensure your API routes are available
  const harborEnv = useHotMemoize(module, () => createEnv('harbor'));
  apiRouter.use('/harbor', await harbor(harborENv));
}