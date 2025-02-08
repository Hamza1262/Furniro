import { createClient } from '@sanity/client';

const client = createClient({
  projectId: "2xsedikn",
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-01-13',
  token: 'skbsDdC7vtpnDhCxYFtFTSiSnXjspuRKeKMLK8vqFiIc0A8HVe9IHi1Rb7XVfPCrOaSaYgB2Y9vpLC4Sv2DtfPoJbMpKcZPVakKSREbwjgHoT0ajYSGS46aNdqLP7gvh6Bb6lamhfwznoc9X2eods6VP0YVJROz6HhpvqH4MDvdBZFMXhmDd',
});

async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${imageUrl}`);
    }

    const buffer = await response.arrayBuffer();
    const bufferImage = Buffer.from(buffer);

    const asset = await client.assets.upload('image', bufferImage, {
      filename: imageUrl.split('/').pop(),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;
  }
}

async function uploadProduct(product) {
  try {
    const imageId = await uploadImageToSanity(product.imageUrl);

    if (imageId) {
      const document = {
        _type: 'product',
        title: product.title,
        price: product.price,
        productImage: {
          _type: 'image',
          asset: {
            _ref: imageId,
          },
        },
        tags: product.tags,
        discountPercentage: product.discountPercentage, // Fixed typo
        description: product.description,
        isNew: product.isNew,
        category: {
          _type: "reference",
          _ref: product.categoryId // Assuming your category is a reference
        }
      };

      const createdProduct = await client.create(document);
      console.log(`Product ${product.title} uploaded successfully:`, createdProduct);
    } else {
      console.log(`Product ${product.title} skipped due to image upload failure.`);
    }
  } catch (error) {
    console.error('Error uploading product:', error);
  }
}

async function importProducts() {
  try {
    const response = await fetch('https://template6-six.vercel.app/api/products');
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const products = await response.json();

    for (const product of products) {
      await uploadProduct(product);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

importProducts();
