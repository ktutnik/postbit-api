import sdk from "aws-sdk";

export async function uploadToS3(path: string, buf: Buffer) {
  const bucket = new sdk.S3();
  const result = await bucket
    .upload({
      Bucket: process.env.AWS_BUCKET_NAME || "default",
      Body: buf,
      Key: path.replace(/^\//, ""),
      ACL: "public-read",
    })
    .promise();
  return result.Location;
}
