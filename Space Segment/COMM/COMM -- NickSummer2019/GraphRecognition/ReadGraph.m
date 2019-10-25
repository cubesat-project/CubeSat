close all
% load the graph and show it 
MyGraph = imread("PERvsSNR_GMSK.PNG");
figure
imshow(MyGraph)

% specify the values at the top , origin and bottom of the graph 
A = [0,0.35];
B = [10,0];
C = [17,0];

% use data theif 
% [xPER,yPER] = DataTheif(MyGraph,A,B,C);

% show the values on your own figure
figure
plot(xPER,yPER)

% convert the PER vs SNR equation using the equation where n = number of
% bits per packet
% n minimum = 9 bytes * 8bits/byte = 72
% n maximum = 133 bytes * 8bits/byte = 1064
nmin = 9*8;
nmax = 133*8;
yBERmin = 1-(1-yPER).^(1/nmin)
yBERmax = 1-(1-yPER).^(1/nmax)

figure
plot(xPER,yBERmin)
title("BER vs SNR at packet size = 9bytes")
xlabel("SNR")
ylabel("BER")

figure
plot(xPER,yBERmax)
title("BER vs SNR at packet size = 127bytes, data rate = 9600bps")
xlabel("SNR")
ylabel("BER")