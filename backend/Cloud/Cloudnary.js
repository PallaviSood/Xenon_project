import cloudinary from 'cloudinary';
import env from 'dotenv';

env.config();
const cloudData = cloudinary.v2;

// Configuration 
cloudData.config({
  cloud_name: process.env.COULD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET_KEY
});

export default cloudData;