const axios = require("axios");
const fs = require("fs");
const path = require("path");

const modelUrls = {
  "facenet-model":
    "https://github.com/GOOD-I-DEER/node-red-contrib-face-vectorization/raw/main/model/facenet-model.onnx",
};

const downloadDir = path.join(__dirname, "model");

async function downloadModels() {
  try {
    if (!fs.existsSync(downloadDir)) {
      fs.mkdirSync(downloadDir, { recursive: true });
    }

    for (const modelName in modelUrls) {
      const modelUrl = modelUrls[modelName];
      const response = await axios.get(modelUrl, { responseType: "stream" });
      const modelPath = path.join(downloadDir, `${modelName}.onnx`);
      const fileStream = fs.createWriteStream(modelPath);
      response.data.pipe(fileStream);
      await new Promise((resolve, reject) => {
        fileStream.on("finish", resolve);
        fileStream.on("error", reject);
      });
      console.log(`모델 파일 ${modelName}.onnx 다운로드 완료`);
    }
  } catch (error) {
    console.error("모델 파일 다운로드 중 오류 발생:", error);
  }
}

downloadModels();
