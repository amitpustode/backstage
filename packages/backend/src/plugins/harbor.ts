// packages/backend/src/plugins/harbor.ts
//import { createRouter } from '@bestsellerit/backstage-plugin-harbor-backend';
import { createRouter } from '@digitalist-open-cloud/backstage-plugin-harbor-backend';
import { Router } from 'express';
import { PluginEnvironment } from '../types';

export default async function createPlugin({
  logger,
  config,
}: PluginEnvironment): Promise<Router> {
  return await createRouter({ logger, config });
}