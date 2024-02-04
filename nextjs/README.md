# [Nextjs Nootes]
- react üzerine kurulmuştur. Kendi dökümanı da nextjs kullanımına teşvik ediyor. 
- Nextjs dev sürecini kolaylaştırır.
- Web uygulamalarımızı daha optimize bir hale getirir.
- Birçok comp vardır. reload time' ı kısaltır. SEO optimizasyonu pre-rendered code sayesinde. lazy loading componentler bile yapılabilir.
- server side bazlı çalışır client olarak da kullanılabilir. static side ise data çok değişmiyorsa kullanılır. 
- Dosya tabanlı bir routing yöntemi kullanır. app klasörü içerisndeki her bir dosya bir route anlamına gelir.
- Next.js 9 dan sonra gelen Api Routes özelliği ile full stack development environment olarak kulllanmamızza olanak verriyor.
- server component, client comp leri var


# [PromptHub]

**Welcome to our Workshop**, clone this repository to follow along.


## Tech Stack

- **Next.js 13**
- **Tailwind CSS**
- **MongoDB**

## Getting Started

To get started with PromptHub, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/PromptHub.git
   cd PromptHub
   ```
2. **Install Dependencies:**
   ```bash
   yarn
   ```
3. **Create a local environment variables file .env.local with the following fields:**
   ```bash
   GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID
   GOOGLE_CLIENT_SECRET=YOUR_GOOGLE_CLIENT_SECRET
   MONGODB_URI=YOUR_MONGODB_URI
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_URL_INTERNAL=http://localhost:3000
   NEXTAUTH_SECRET=YOUR_NEXTAUTH_SECRET
   ```
4. **Start the development server:**
   ```bash
   yarn dev
   ```

