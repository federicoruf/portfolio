export type SectionId = 'hero' | 'about' | 'work' | 'stack' | 'personalProjects' | 'education' | 'contact';

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
  { id: 'stack', sheet: '03', nameEs: 'Stack Técnico', nameEn: 'Tech Stack' },
  { id: 'personalProjects', sheet: '04', nameEs: 'Proyectos Personales', nameEn: 'Personal Projects' },
  { id: 'education', sheet: '05', nameEs: 'Formación y Premios', nameEn: 'Education & Awards' },
  { id: 'contact', sheet: '06', nameEs: 'Contacto', nameEn: 'Contact' },
];
