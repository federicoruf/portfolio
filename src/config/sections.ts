export type SectionId = 'hero' | 'about' | 'work' | 'approach' | 'contact';

export interface SectionMeta {
  id: SectionId;
  sheet: string;
  nameEs: string;
  nameEn: string;
}

export const SECTIONS: SectionMeta[] = [
  { id: 'hero', sheet: '00', nameEs: 'Portada', nameEn: 'Cover' },
  { id: 'about', sheet: '01', nameEs: 'Memoria', nameEn: 'About' },
  { id: 'work', sheet: '02', nameEs: 'Proyectos', nameEn: 'Work' },
  { id: 'approach', sheet: '03', nameEs: 'Proceso', nameEn: 'Process' },
  { id: 'contact', sheet: '04', nameEs: 'Contacto', nameEn: 'Contact' },
];
