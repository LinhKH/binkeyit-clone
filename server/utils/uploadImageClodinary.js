import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLODINARY_CLOUD_NAME,
  api_key: process.env.CLODINARY_API_KEY,
  api_secret: process.env.CLODINARY_API_SECRET_KEY,
});

const uploadImageClodinary = async (image) => {
  const buffer = image?.buffer || Buffer.from(await image.arrayBuffer());

  const uploadImage = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({ folder: "binkeyit" }, (error, uploadResult) => {
        if (error) {
          return reject(err);
        }
        return resolve(uploadResult);
      })
      .end(buffer);
  });

  return uploadImage;
};

const removeImageClodinary = async (oldAvatarUrl) => {
  try {
    if (oldAvatarUrl) {
      const urlParts = oldAvatarUrl.split('/');
      const folderAndPublicId = urlParts.slice(-2).join('/').split('.')[0];
      await cloudinary.uploader.destroy(folderAndPublicId);
    }
  } catch (error) {
    console.error("Error removing image from Cloudinary:", error);
    throw new Error("Failed to remove old avatar from Cloudinary");
  }
};

export { uploadImageClodinary, removeImageClodinary };
