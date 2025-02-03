import { 
  ClusterDetails,
  KubernetesBuilder,
  KubernetesClustersSupplier,
} from '@backstage/plugin-kubernetes-backend';

import { Router } from 'express';
import { PluginEnvironment } from '../types';
import { CatalogClient } from '@backstage/catalog-client';
import { Duration } from 'luxon';

export class CustomClustersSupplier implements KubernetesClustersSupplier {
    constructor(private clusterDetails: ClusterDetails[] = []) {}
  
    static create(refreshInterval: Duration) {
      const clusterSupplier = new CustomClustersSupplier();
      // setup refresh, e.g. using a copy of https://github.com/backstage/backstage/blob/master/plugins/kubernetes-backend/src/service/runPeriodically.ts
      runPeriodically(
        () => clusterSupplier.refreshClusters(),
        refreshInterval.toMillis(),
      );
      return clusterSupplier;
    }
  
    async refreshClusters(): Promise<void> {
      this.clusterDetails = []; // fetch from somewhere
    }
  
    async getClusters(): Promise<ClusterDetails[]> {
      return this.clusterDetails;
    }
  } 

export default async function createPlugin(
  env: PluginEnvironment,
): Promise<Router> {
  const builder = await KubernetesBuilder.createBuilder({
     logger: env.logger,
     config: env.config,
  }); 
  builder.setClusterSupplier(
    CustomClustersSupplier.create(Duration.fromObject({ minutes: 60 })),
  );
  const { router } = await builder.build();
  return router;
}