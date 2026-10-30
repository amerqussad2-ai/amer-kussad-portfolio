import sharp from 'sharp';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve('dist');
const SITE = 'https://amer-kussad-portfolio-v2.vercel.app';
const sources = [
 ['images/amer-kussad-profile.jpg','images/optimized/amer-kussad-profile.webp',820],
 ['images/projects/tatweer-home.webp','images/optimized/projects/tatweer-home.webp',1400],
 ['images/projects/casa-luce-home.webp','images/optimized/projects/casa-luce-home.webp',1400],
 ['images/projects/tatweer/jobs-listing.png','images/optimized/projects/tatweer/jobs-listing.webp',1600],
 ['images/projects/tatweer/job-detail.png','images/optimized/projects/tatweer/job-detail.webp',1600],
 ['images/projects/tatweer/arabic-rtl.png','images/optimized/projects/tatweer/arabic-rtl.webp',1600],
 ['images/projects/tatweer/admin-dashboard.png','images/optimized/projects/tatweer/admin-dashboard.webp',1400],
 ['images/projects/casa-luce/home-desktop.png','images/optimized/projects/casa-luce/home-desktop.webp',1600],
 ['images/projects/casa-luce/gallery-desktop.png','images/optimized/projects/casa-luce/gallery-desktop.webp',1600],
 ['images/projects/casa-luce/home-mobile.png','images/optimized/projects/casa-luce/home-mobile.webp',650],
];

let totalOriginal = 0, totalOptimized = 0;
for (const [source,destination,width] of sources) {
  const input = await readFile(path.join(ROOT,source));
  const target = path.join(ROOT,destination);
  await mkdir(path.dirname(target),{recursive:true});
  const result = await sharp(input).rotate().resize({width,withoutEnlargement:true,fit:'inside'}).webp({quality:82,effort:5}).toBuffer();
  await writeFile(target,result);
  totalOriginal += input.length;
  totalOptimized += result.length;
  console.log(source+' '+(input.length/1024).toFixed(0)+' KB => '+(result.length/1024).toFixed(0)+' KB');
}
console.log('Images optimized: '+(totalOriginal/1024/1024).toFixed(2)+' MB => '+(totalOptimized/1024/1024).toFixed(2)+' MB');

const artwork = '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">'+
'<defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#303234"/><stop offset="1" stop-color="#294D63"/></linearGradient></defs>'+
'<rect width="1200" height="630" fill="url(#bg)"/><circle cx="1070" cy="390" r="350" fill="#3B7074" opacity=".15"/>'+
'<path d="M78 80h1044 M78 550h1044" stroke="#BFD8DD" stroke-opacity=".4" stroke-width="2"/>'+
'<text x="80" y="145" font-family="Arial, sans-serif" font-size="26" font-weight="bold" letter-spacing="7" fill="#BFD8DD">PERSONAL PORTFOLIO / 2026</text>'+
'<text x="72" y="345" font-family="Arial, sans-serif" font-size="145" font-weight="bold" letter-spacing="-9" fill="#F7F7F5">Amer Kussad</text>'+
'<circle cx="1095" cy="323" r="14" fill="#F45129"/>'+
'<text x="81" y="430" font-family="Arial, sans-serif" font-size="35" fill="#BFD8DD">Front-End Developer &amp; AI Product Builder</text>'+
'<text x="81" y="520" font-family="Arial, sans-serif" font-size="25" fill="#F7F7F5">DESIGN × ENGINEERING × CURIOSITY</text>'+
'</svg>';
await sharp(Buffer.from(artwork)).png({compressionLevel:8}).toFile(path.join(ROOT,'og-cover.png'));

const indexFile=path.join(ROOT,'index.html');
const original=await readFile(indexFile,'utf8');
const cases=[
 {slug:'tatweer',title:'Tatweer Employment — Front-End Case Study | Amer Kussad',
  description:'Explore Tatweer Employment: a bilingual React and TypeScript recruitment application with jobs, RTL layouts and a Supabase-powered workflow.'},
 {slug:'casa-luce',title:'Casa Luce — Front-End Case Study | Amer Kussad',
  description:'Explore Casa Luce: a responsive, multi-page Italian restaurant website built with Next.js and TypeScript, with editorial design and a visual gallery.'}
];
const homeDescription='Amer Kussad is a Front-End Developer & AI Product Builder based in the UAE. Explore selected React, Next.js and TypeScript projects and get in touch.';
const person={'@context':'https://schema.org','@type':'Person',name:'Amer Kussad',url:SITE,jobTitle:'Front-End Developer & AI Product Builder',description:homeDescription,sameAs:['https://github.com/amerqussad2-ai','https://www.linkedin.com/in/amer-qussad-727a6a199']};
const escapeAttr = v => v.replaceAll('&','&amp;').replaceAll('"','&quot;');
function buildTags({title,description,url,type,structured}){
  const image=SITE+'/og-cover.png';
  return [
   '<meta name="description" content="'+escapeAttr(description)+'" />',
   '<link rel="canonical" href="'+url+'" />',
   '<meta name="robots" content="index, follow, max-image-preview:large" />',
   '<meta property="og:type" content="'+type+'" />',
   '<meta property="og:site_name" content="Amer Kussad — Portfolio" />',
   '<meta property="og:title" content="'+escapeAttr(title)+'" />',
   '<meta property="og:description" content="'+escapeAttr(description)+'" />',
   '<meta property="og:url" content="'+url+'" />',
   '<meta property="og:image" content="'+image+'" />',
   '<meta property="og:image:width" content="1200" />',
   '<meta property="og:image:height" content="630" />',
   '<meta property="og:image:alt" content="Amer Kussad — Front-End Developer and AI Product Builder" />',
   '<meta name="twitter:card" content="summary_large_image" />',
   '<meta name="twitter:title" content="'+escapeAttr(title)+'" />',
   '<meta name="twitter:description" content="'+escapeAttr(description)+'" />',
   '<meta name="twitter:image" content="'+image+'" />',
   '<script type="application/ld+json">'+JSON.stringify(structured).replace(/</g,'\\u003c')+'</script>'
  ].join('\n');
}
function htmlFor(data){
 return original.replace('<title>Amer Kussad — Developer & AI Product Builder</title>','<title>'+data.title+'</title>')
   .replace('<!-- SEO_TAGS -->',buildTags(data));
}
await writeFile(indexFile,htmlFor({title:'Amer Kussad — Front-End Developer & AI Product Builder',description:homeDescription,url:SITE+'/',type:'website',structured:person}));
for(const study of cases){
 const dir=path.join(ROOT,'projects',study.slug);
 await mkdir(dir,{recursive:true});
 const url=SITE+'/projects/'+study.slug;
 const structured={'@context':'https://schema.org','@type':'CreativeWork',name:study.title,description:study.description,author:{'@type':'Person',name:'Amer Kussad'},url};
 await writeFile(path.join(dir,'index.html'),htmlFor({title:study.title,description:study.description,url,type:'article',structured}));
}
const paths=['/',...cases.map(c=>'/projects/'+c.slug)];
const sitemap='<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+paths.map(p=>'  <url><loc>'+SITE+p+'</loc></url>').join('\n')+'\n</urlset>\n';
await writeFile(path.join(ROOT,'sitemap.xml'),sitemap);
await writeFile(path.join(ROOT,'robots.txt'),'User-agent: *\nAllow: /\nSitemap: '+SITE+'/sitemap.xml\n');
console.log('Generated unique case study SEO pages, OG artwork, robots.txt and sitemap.xml');
