// client/src/app/sitemap.js
export default function sitemap() {
  const baseUrl = 'https://www.mannatmicroconcrete.site';
  
  // List of constant routes
  const routes = [
    '',
    '/about',
    '/services',
    '/projects',
    '/enquiry',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic Service Slugs
  const services = [
    'microcement-flooring',
    'microcement-walls',
    'epoxy-coatings',
    'venetian-plaster',
    'lime-wash',
    'luxury-wetrooms',
    'bespoke-furniture',
    'terrazzo'
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...routes, ...services];
}
