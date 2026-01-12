import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'production',
  title: 'Udaysha\'s Pret',

  projectId: '6bd2qwij',
  dataset: 'production', // Using 'production' directly instead of env variable

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});