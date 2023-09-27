# @GOOD-I-DEER/node-red-contrib-face-vectorization
[![platform](https://img.shields.io/badge/platform-Node--RED-red)](https://nodered.org)
[![npm version](https://badge.fury.io/js/@GOOD-I-DEER%2Fnode-red-contrib-face-vectorization.svg)](https://badge.fury.io/js/@GOOD-I-DEER%2Fnode-red-contrib-face-vectorization)
[![GitHub license](https://img.shields.io/github/license/GOOD-I-DEER/node-red-contrib-face-vectorization)](https://github.com/GOOD-I-DEER/node-red-contrib-face-vectorization/blob/main/LICENSE)

This module provides a node that vectorizes facial photos using AI in Node-RED.

These nodes require node.js version 18.16.1 and Node-RED version 3.1.0.
<hr>

## Description
This node is part of the Facial Recognition with AI package.   
If you would like to see the entire package, please go to the link. 
[@GOOD-I-DEER/node-red-contrib-vision-AI](https://badge.fury.io/js/@GOOD-I-DEER/node-red-contrib-vision-AI)  
 
The **AI** used in this node uses the **Inception ResNet v1** architecture, an implementation of the **FaceNet** model in Pytorch, and is trained on the **VGGFace2** dataset.  
It converts the pre-trained model into **onnx** format and operates through the **onnx-runtime** module. Files are provided directly to reduce dependency on external APIs.  
The input image buffer is converted into 512 vector values and provided.
<hr>


## Pre-requisites
The Node-Red-Contrib-Face-Vectorization requires [Node-RED](https://nodered.org) to be installed.
<hr>


## Install
```
cd ~/.node-red
npm install @GOOD-I-DEER/node-red-contrib-face-vectorization
```
Restart your Node-RED instance
<hr>


## Input
Single Image   
- The input is an image file containing one face. Used for input to one image buffer.

Image Array   
- The image buffer can be input in the form of an array. It can be used when there is a possibility of extracting and transmitting face photos of multiple people from linked nodes.
<hr>


## property
![image](https://github.com/GOOD-I-DEER/node-red-contrib-face-vectorization/blob/main/img/properites.png)

Name  

  - The name of the node displayed on the screen.   

Input Type   

  - You can choose whether to insert one image buffer or multiple image buffers. In case of multiple image buffers, you can put them in the form of an Array. 

Return Type   

- You can choose whether to receive the vector result as output or save it as a file. The exported data is in the form of an array of vector arrays of faces. When selecting save as file, Path and Method are activated. We recommend saving as a text file.

Path

- This is where you enter the desired root, including the file name and extension, when saving a text file. If you do not specify an absolute path, it will be determined based on the execution space.

Method   

- When saving a file, you can decide whether to overwrite or add. Create a file if it does not already exist.
<hr>


## Output

Array of Arrays

- Vectors for faces are output in the form of an array to msg.payload.

Text File

- Save vector data in file format. Depending on the method, overwrite or add to the input path.
<hr>



## Examples
Here are some example flows configured with our dashboard nodes.
![image](https://user-images.githubusercontent.com/69517473/194187358-e0b248eb-c3f9-44b5-8eeb-64eac1113bd8.png)
![image](https://user-images.githubusercontent.com/69517473/194187374-4a6432f2-2a22-4cdf-88f7-5eb86283b322.png)
![image](https://user-images.githubusercontent.com/69517473/194187422-6559735e-4a28-44a4-8ced-823b1f387d54.png)

<hr>

## Discussions and suggestions
Use [GitHub Issues](https://github.com/SoopSASM/node-red-soop-dashboard/issues) to ask questions or to discuss new features.
<hr>

## Authors
[**SoopSASM**](https://github.com/SoopSASM) in SSAFY(Samsung Software Academy for Youth) 7th
- [Hee won Hwang](https://github.com/lea-hwang)
- [Hye Rim Kim](https://github.com/hrookim)
- [Jae Hoon Lim](https://github.com/quaternion12345)
- [Je Kwan Kim](https://github.com/jekwan)
- [Jun Sik Jo](https://github.com/zzunsik)
- [Sang Hyeon Jeon](https://github.com/gemnsh)
<hr>

## Copyright and license
Copyright Samsung Automation Studio Team under the [Apache 2.0 license](https://www.apache.org/licenses/LICENSE-2.0)
<hr>

## Reference
- [Node-RED Creating Nodes](https://nodered.org/docs/creating-nodes/)
- [Node-RED node-red-dashboard](https://flows.nodered.org/node/node-red-dashboard)
- [SamsungAutomationStudio Github Repository](https://github.com/Samsung/SamsungAutomationStudio)
<hr>