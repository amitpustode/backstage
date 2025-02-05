// // // packages/backend/src/plugins/kubernetes.ts
// import { KubernetesBuilder } from '@backstage/plugin-kubernetes-backend';
// import { Router } from 'express';
// import { PluginEnvironment } from '../types';
// import { CatalogClient } from '@backstage/catalog-client';

// export default async function createPlugin(
//   env: PluginEnvironment,
// ): Promise<Router> {
//   const catalogApi = new CatalogClient({ discoveryApi: env.discovery });
//   const { router } = await KubernetesBuilder.createBuilder({
//     logger: env.logger,
//     config: env.config,
//     catalogApi,
//     permissions: env.permissions,
//   }).build();
//   return router;
// }

// packages/backend/src/plugins/kubernetes.ts
import { createRouter } from '@backstage/plugin-kubernetes-backend';
import { PluginEnvironment } from '../types';

export default async function createPlugin({
  logger,
  config,
}: PluginEnvironment) {
  return await createRouter({ logger, config });
}