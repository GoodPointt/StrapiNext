import type { Schema, Attribute } from '@strapi/strapi';

export interface SectionSectionHero extends Schema.Component {
  collectionName: 'components_section_section_heroes';
  info: {
    displayName: 'SectionHero';
    icon: 'magic';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    bg: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'section.section-hero': SectionSectionHero;
    }
  }
}
