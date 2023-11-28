// Always use BASE_URL const instead of NEXT_PUBLIC_BASE_URL
// Dynamic vercel preview branches have random wildcard subdomains 
// so NEXT_PUBLIC_ENV doesn't work in staging/preview
export const BASE_URL = process.env.NEXT_PUBLIC_ENV === 'staging' ? `https://${process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL}` :  process.env.NEXT_PUBLIC_BASE_URL
