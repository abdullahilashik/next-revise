// app/api/images/route.js

import { NextResponse } from 'next/server';
import cloudinary from 'cloudinary';

cloudinary.v2.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUDNAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
  try {
    const { resources } = await cloudinary.v2.api.resources({
      type: 'upload',           // Get only uploaded resources
      resource_type: 'image',    // Only fetch images (omit to get all resources)
      max_results: 100,          // Limit to 100 (adjust as needed, max is 500)
    });

    // Extract only necessary info for easier handling on the client
    const images = resources.map((resource : any) => ({
      url: resource.secure_url,
      public_id: resource.public_id,
      created_at: resource.created_at,
    }));

    return NextResponse.json(images);
  } catch (error) {
    console.error('Error fetching images from Cloudinary:', error);
    return NextResponse.json({ error: 'Failed to fetch images' }, { status: 500 });
  }
}
