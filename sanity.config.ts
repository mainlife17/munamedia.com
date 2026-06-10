import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemaTypes';

export default defineConfig({
  name: 'muna_media_website',
  title: 'Muna Media Website',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'replace-me',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  basePath: '/studio',
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes }
});
