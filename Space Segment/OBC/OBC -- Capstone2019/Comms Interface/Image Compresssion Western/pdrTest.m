%PDR test
clear
clc
close all

%read all the images
im464 = imread('final464.tiff');
im542 = imread('final542.tiff');
im639 = imread('final639.tiff');
im669 = imread('final669.tiff');
im708 = imread('final708.tiff');
im800 = imread('final800.tiff');
im845 = imread('final845.tiff');
test = imread('final845.tiff');

%setup the images inside a 3D array
imCluster(:,:,1) = im464;
imCluster(:,:,2) = im542;
imCluster(:,:,3) = im639;
imCluster(:,:,4) = im669;
imCluster(:,:,5) = im708;
imCluster(:,:,6) = im800;
imCluster(:,:,7) = im845;
imCluster(:,:,8) = test;

% this is for making the images smaller (aka the image compression,
% reducing the rows and collumns !) 
for i = 1:1:8
    im(:,:,i)= imresize(imCluster(:,:,i),0.1,'nearest');
end

% This is for making the images be put side by side! 
imThumbs = [im(:,:,1) im(:,:,2) im(:,:,3) im(:,:,4); ...
    im(:,:,5) im(:,:,6) im(:,:,7) im(:,:,8)];

%uncomment if you want to see imThumbs, the stitched together images 
%imshow(imThumbs);

% This is the cubing code, aka the thing you are looking for chimira! 
% Check out the function Cube3Dz in order to understand how it works :)  
Cube3Dz(imCluster(:,:,1),imCluster(:,:,2),imCluster(:,:,3),imCluster(:,:,4),...
    imCluster(:,:,5),imCluster(:,:,6),imCluster(:,:,7))

% this function will display the cube, and save it as a png. 