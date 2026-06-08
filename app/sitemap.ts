import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://accountingskip.com'

  return [
    { url: base,                                                          lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/services`,                                            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/pricing`,                                             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/industries`,                                          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`,                                             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog`,                                                lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${base}/about`,                                               lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/partners`,                                            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/how-ai-categorizes-transactions`,                lastModified: new Date('2026-05-15'), changeFrequency: 'yearly', priority: 0.6 },
    { url: `${base}/blog/amazon-fba-bank-balance-reconciliation`,         lastModified: new Date('2026-05-08'), changeFrequency: 'yearly', priority: 0.6 },
    { url: `${base}/blog/2026-sales-tax-nexus-guide`,                     lastModified: new Date('2026-04-22'), changeFrequency: 'yearly', priority: 0.6 },
    { url: `${base}/privacy`,                                             lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${base}/terms`,                                               lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${base}/security`,                                            lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
  ]
}
