function [x,y] = DataTheif(Image,A,B,C)

%%% By Adnan M El Makdah
% Image is the plot in any format.
% A is the end upper coordinate of the y-axis (i.e. A = [0 1])
% B is the origin coordinate of the graph  (i.e. B = [0 0])
% C is the end right coordinate of the x-axis (i.e. C = [1 0])
% when you run the function, you should pick the first three points that
% corresponds to the upper y-axis point, origin, and the left x-axis point
% respectively. Then pick the points on the curve that you want to steal.
% When you are done press enter.
% For any questions: adnan.elmakdah@gmail.com

figure, imshow(Image);

for i = 1:3
    Axis(i,:) = ginput(1);
    hold on;
    plot(Axis(i,1),Axis(i,2),'rx','markersize',15);
end

YScale = abs(A(2)-B(2))/abs(Axis(1,2)-Axis(2,2));
XScale = abs(C(1)-B(1))/abs(Axis(3,1)-Axis(2,1));

for i=1:100
    try
        Points(i,:) = ginput(1);
    catch
        break;
    end
        
    hold on;
    plot(Points(i,1),Points(i,2),'o');
    
end

Points(:,1) = (Points(:,1)- Axis(2,1))*XScale;
Points(:,2) = (( Axis(3,2)-Points(:,2)))*YScale;

x = Points(:,1)+B(1);
y = Points(:,2)+B(2);




