function[] = Cube3D(final464,final542,final639,final669,final708,final800,final845)
% Inputs: 7 seperate images (you  can modify to make it even more!) 
% outputs: The figure you make should be saved, however you are not
% returning any outputs to the main file (aka pdrTest.m in this case) 

% load images, they must be of data type double 
%(I have added a rotation by 90 degrees for better viewing, you do not have to!)
M(:,1,:) = im2double(imrotate(final464,90));
M(:,2,:) = im2double(imrotate(final542,90));
M(:,3,:) = im2double(imrotate(final639,90));
M(:,4,:) = im2double(imrotate(final669,90));
M(:,5,:) = im2double(imrotate(final708,90));
M(:,6,:) = im2double(imrotate(final800,90));
M(:,7,:) = im2double(imrotate(final845,90));

% for reverse order if you want 850->450 nm 
for i = 1:1:7
    N(:,i,:) = M(:,8-i,:);
end

%save figure handle in case of further use
Cube = figure('units','normalized','outerposition',[0 0 1 1]);

% note it goes hs = slice(YourData,x,y,z), you specify you want your images
% on the x slice in this case!! 

% specify your slice (I chose x slices for best viewing)
% regular order 
% hs = slice(M,1:7,[],[]) ;
% reverse order
hs = slice(N,1:7,[],[]) ;

%specify if you want to interpolate data (we don't, our pixels are our
%pixels)
shading flat

%speficy grayscale 
colormap(gray);

%specify the opacity of the cubing (1 = no opacity, 0 = translucent)
set(hs,'FaceAlpha',1.0);

%specify x labels, tick marks
xticks(1:1:7)
%regular order
%xticklabels({'434','542','639','669','708','800','845'});
%reverse order
xticklabels({'845','800','708','669','639','542','464'});

%titles
xlabel('Wavelength(nm)')
ylabel('X Intensity')
zlabel('Y intensity')
title('Images In Storage')

%save the output 
saveas(gca,'Cubed3DView.png');
end
