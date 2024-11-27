import axios from "axios";
import { BASE_URL } from "../config/config";

const getPresignedUrl = async (file: File, type: string) => {
  try {
    const fileName = file.name;
    const fileType = file.type;

    const response = await axios.post(`${BASE_URL}/upload/${type}`, {
      fileName,
      fileType,
    });

    if (response.data) {
      const { presignedUrl, s3ObjectUrl } = response.data;
      return { presignedUrl, s3ObjectUrl };
    }
    throw new Error("Presigned URL not found in response.");
  } catch (error) {
    console.error("😭 Failed to fetch presigned URL: ", error);
    throw error;
  }
};

const uploadImageToS3 = async (file: File, type: string) => {
  try {
    const fileType = file.type;

    const { presignedUrl, s3ObjectUrl } = await getPresignedUrl(file, type);

    await axios.put(presignedUrl, file, {
      headers: {
        "Content-Type": fileType,
      },
    });

    return s3ObjectUrl;
  } catch (error) {
    console.error("😭 Image upload failed: ", error);
    throw new Error("Image upload failed");
  }
};

export default uploadImageToS3;
