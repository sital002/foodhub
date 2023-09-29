## FoodHub 
Foodhub is a simple Nextjs Application using latest Next 13 app router. 
##### Features:
  * Browse Products
  * Search Products
  * Add Item to Cart
  * Delete Item from Cart
#### Todo
  * Pagination or Infinite Scrolling
  * Filter Options
  * Checkout Page


### Local Development
#### Fork the repository

```bash
git clone https://github.com/<your_username>/foodhub
npm ci
```

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Start Contributing

#### Fork the repository and Clone the repository.

```
cd foodhub
git checkout -b "branchName"
// Make changes and commit those changes
git commit -m "commit message"
git push origin "branchName"
Create a pull request
```

#### Environment Variables:

```
NEXT_PUBLIC_CLOUDINARY_PRESET=""
NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL=""
NEXT_PUBLIC_FILE_UPLOAD_API_KEY=""
MONGODB_URI="mongodb://localhost:27017/foodhub"
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_URL_INTERNAL="http://localhost:3000"
NEXTAUTH_SECRET=""
GITHUB_ID=""
GITHUB_SECRET=""

```
